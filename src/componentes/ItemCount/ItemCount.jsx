import React from 'react';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useDarkModeContext } from '../../context/DarkModeContext';

const ItemCount = ({valInicial,stock,onAdd}) => {
    
    const {darkMode} = useDarkModeContext()
    const [contador,setContador] = useState(valInicial)
    const aumentar = () => (contador < stock) && setContador(contador + 1)
    const disminuir = () => (contador > valInicial) && setContador( contador - 1)
    const agregarCarrito = () =>{
        onAdd(contador)
        toast( `⬆️ ${contador} Producto Agregado`)
    } 
    return (
        <div>
            <button type="button" className={` btn ${darkMode ?  "btn-dark" : "btn-primary"}`} onClick={() => disminuir()}>-</button>
                {contador}
            <button type="button" className={` btn ${darkMode ?  "btn-dark" : "btn-primary"}`} onClick={() => aumentar()}>+</button>
            <button type='button' className={` btn ${darkMode ?  "btn-dark" : "btn-primary"}`} onClick={()=> agregarCarrito()}>Agregar</button>

        </div>
    );
}


export default ItemCount;
