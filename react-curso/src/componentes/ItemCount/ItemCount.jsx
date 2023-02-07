import React from 'react';
import { useState } from 'react';

const ItemCount = ({valInicial,stock}) => {

    const [contador,setContador] = useState(valInicial)
    const aumentar = () => (contador < stock) && setContador(contador + 1)
    const disminuir = () => (contador > valInicial) && setContador( contador - 1)
    return (
        <div>
            <button type="button" className="btn btn-info" onClick={() => disminuir()}>-</button>
                {contador}
            <button type="button" className="btn btn-info" onClick={() => aumentar()}>+</button>
        </div>
    );
}


export default ItemCount;
