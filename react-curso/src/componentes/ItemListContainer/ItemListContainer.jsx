import { useState,useEffect } from "react";
import {useParams} from "react-router-dom"
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {
    
    const [productos , setProductos] = useState([])
    const {idCategoria} = useParams()

    useEffect(() => {

        if(idCategoria)
        {
            fetch('../json/productos.json')
            .then(response => response.json())
            .then(item => {
                const products = item.filter(prod => prod.idCategoria === idCategoria)
                const productsList = ItemList({products})
                console.log(productsList)
                setProductos(productsList)
            })
        } else{
            fetch('./json/productos.json')
            .then(response => response.json())
            .then(products => {
            const productsList = ItemList({products})
            console.log(productsList)
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
