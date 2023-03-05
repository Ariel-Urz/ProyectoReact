import React from 'react';
import { useCarritoContext } from '../../context/CarritoContext';
import { useDarkModeContext } from '../../context/DarkModeContext';

const ItemCart = ({item}) => {
    const {removeItem} = useCarritoContext()
    const {darkMode} = useDarkModeContext()
    return (
        <div className= {`card mb-3 ${darkMode ? "cardCartDark" : "cardCart"}`}>
            <table className= {`table border border-danger border-3 ${darkMode ? "table-dark table-hover" : "table-hover"}`}>
                <thead>
                    <tr>
                        <th scope="col">Producto</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Precio Unitario</th>
                        <th scope="col">Subtotal</th>
                    </tr>
                </thead>
                    <tbody>
                        <tr>
                            <th><img className='imgCart' src={item.img} alt={`imagen de producto ${item.nombre}`} /></th>
                            <td>{item.nombre} {item.modelo}</td>
                            <td>{item.cant}</td>
                            <td>$ {new Intl.NumberFormat("de-DE").format(item.precio)}</td>
                            <td>$ {new Intl.NumberFormat("de-DE").format(item.precio * item.cant)}</td>
                        </tr>
                    
                    </tbody>
            
            </table>
            <button className='btn btn-danger' onClick={()=> removeItem(item.id)}> Eliminar del carrito</button>

   
        </div>
    );
}

export default ItemCart;
