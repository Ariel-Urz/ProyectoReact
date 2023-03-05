// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore,collection,doc,addDoc,getDoc,getDocs,updateDoc,deleteDoc} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.APY_KEY,
  authDomain: "bookhouseproyecto.firebaseapp.com",
  projectId: "bookhouseproyecto",
  storageBucket: "bookhouseproyecto.appspot.com",
  messagingSenderId: "1029831354915",
  appId: "1:1029831354915:web:c7848cf020a85e5fb85f96"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore() //consulto la base de datos


//CRUD

//Create
export const cargarBDD = async () => {
    const promise = await fetch("./json/productos.json")
    const productos = await promise.json()
    productos.forEach( async (prod) =>{
        await addDoc(collection(db,"productos"),{
            nombre: prod.nombre,
            idCategoria: prod.idCategoria,
            autor: prod.autor,
            editorial: prod.editorial,
            descripcion: prod.descripcion,
            precio: prod.precio,
            stock: prod.stock,
            img: prod.img

        })
    })

}


//Consultar Productos en Base de Dato
export const getProductos = async()=> {
    const productos = await getDocs(collection(db,"productos"))
    const items = productos.docs.map(prod => {
        return {...prod.data(), id: prod.id}
    })
    return items
}
//Consultar Producto en Base de Dato
export const getProducto = async(id) => {
    const producto = await getDoc(doc(db,"productos",id))
    const item = {...producto.data(), id: producto.id}
    return item
}

export const updateProducto = async(id,info) =>{
    await updateDoc(doc(db,"productos",id), info)
}

export const deleteProducto = async(id) =>{
    await deleteDoc(doc(db,"productos",id))
}

//Crear Orden Compra

export const createOrdenCompra = async(cliente,productos,precioTotal,fecha) => {
    const ordenCompra = await addDoc(collection(db,"ordenCompra"), {
        datosCliente: cliente,
        productos: productos,
        precioTotal: precioTotal,
        fecha: fecha
    })
    return ordenCompra
}

export const getOrdenCompra = async(id) => {
    const ordenCompra = await getDoc(doc(db,"ordenCompra",id))
    const oCompra = {...ordenCompra.data(), id: ordenCompra.id}
    return oCompra
}