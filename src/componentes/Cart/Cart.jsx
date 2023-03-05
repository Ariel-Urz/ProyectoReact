import React from 'react';
import { Link } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import { useCarritoContext } from '../../context/CarritoContext';

const Cart = () => {

   const{carrito,totalPrice,emptyCart} = useCarritoContext()
    return (
       <>
        {carrito.length === 0
        ? 
            <>
                <h2 className='text'>carrito vacio</h2>
                <Link className='nav-link' to={"/"}><button className='btn btn-dark'>Continuar comprando</button></Link>
            </>
        :
            <>
            <div className='container cartContainer'>

                {
                    <ItemList products={carrito} plantilla = {"itemCart"}/>
                }

                <div>
                    <p>Resumen de la compra: ${new Intl.NumberFormat("de-DE").format(totalPrice())}</p>
                    <button className='btn btn-danger' onClick={() => emptyCart()}> Vaciar Carrito</button>
                    <Link className='nav-link' to={"/"}><button className='btn btn-primary'> Continuar Comprando</button></Link>
                    <Link className='nav-link' to={"/checkout"}><button className='btn btn-primary'> Finalizar Compra</button></Link>
                </div>

            </div>

            </>
        }
       </>
    );
}

export default Cart;
