import React from 'react';
import { Link } from 'react-router-dom';
import { useCarritoContext } from '../../context/CarritoContext';
import { useDarkModeContext } from '../../context/DarkModeContext';
const CartWidget = ({cantCarrito}) => {
    const {getItemQuantity} = useCarritoContext()
    const {darkMode} = useDarkModeContext()
    return (
        <>
            
            <Link className='nav-link' to={"/cart"}>

                <button className= {` ${darkMode ? "botonDark-carrito" : "boton-carrito"}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-cart-fill" viewBox="0 0 16 16">
                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                    </svg>
                    {getItemQuantity() > 0 && <span className='cantCarrito'>{getItemQuantity()}</span> }
                </button>
                
            </Link>
          
        </>
    );
}

export default CartWidget;
