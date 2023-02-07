import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
    
    const [producto , setProducto] = useState([])
    const {id} = useParams()
    useEffect(() => {

        fetch('../json/productos.json')
        .then(response => response.json())
        .then(products => {
            const item = products.find(prod => prod.id === parseInt(id))
            setProducto(item)
        })

    }, [])

    return (
        <div className="row grillaCard">
            <ItemDetail item = {producto}/>
        </div>
    );
}

export default ItemDetailContainer;
