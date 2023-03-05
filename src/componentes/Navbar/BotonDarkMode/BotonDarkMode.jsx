import React from 'react';
import './botonDarkMode.css'
//Contexto
import { useDarkModeContext } from '../../../context/DarkModeContext';

const BotonDarkMode = () => {
    const {toggleDarkMode} = useDarkModeContext()
    return (
        <div>
            <p>
                <input type="checkbox" id="switch3" switch="bool" onInput={() => toggleDarkMode()} /> 
                <label htmlFor="switch3" data-on-label="Dark on" data-off-label="Dark off" />
            </p>

        </div>
    );
}

export default BotonDarkMode;
