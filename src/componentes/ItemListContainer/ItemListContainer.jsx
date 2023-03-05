import { useState,useEffect } from "react";
import {useParams} from "react-router-dom"
//componentes
import ItemList from "../ItemList/ItemList";
//Contexto
import { useDarkModeContext } from "../../context/DarkModeContext";
//Firebase
import { getProductos } from "../../firebase/firebase";


const ItemListContainer = () => {
    
    const [productos , setProductos] = useState([])
    const {idCategoria} = useParams()
    const {darkMode} = useDarkModeContext()
    //console.log(darkMode)

    useEffect(() => {

        if(idCategoria)
        {
            getProductos()
            .then(items => {
                const products = items.filter(prod => prod.stock > 0).filter(prod => prod.idCategoria === idCategoria)
                const productsList = <ItemList products={products} plantilla = {"item"}/>
                //console.log(productsList)
                setProductos(productsList)
            })
        } else{
            getProductos()
            .then(items => {
                const products = items.filter(prod => prod.stock > 0)
                const productsList = <ItemList products={products} plantilla = {"item"}/>
            // console.log(productsList)
                setProductos(productsList)
            })
        }

    }, [idCategoria])

    return (
        <div className="row grillaCard">
            {productos}
        </div>
    );
}

export default ItemListContainer;
