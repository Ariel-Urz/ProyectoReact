import { useContext, createContext, useState } from "react";

const DarkModeContext = createContext() //crea contexto
export const useDarkModeContext = () => useContext(DarkModeContext) // me permite usar mi contexto
export const DarkModeProvider = (props) => { //define que proveedor puede acceder a la informacion
    const [darkMode, setDarkMode] = useState(false)
    const toggleDarkMode = () => {
        setDarkMode(!darkMode)
        if (!darkMode) {
            document.body.firstElementChild.classList.add("darkMode")
        }
        else{
            document.body.firstElementChild.classList.remove("darkMode")
        }
    }

    return(
        <DarkModeContext.Provider value = {{darkMode,toggleDarkMode}}>
            {props.children}
        </DarkModeContext.Provider>
    )
}