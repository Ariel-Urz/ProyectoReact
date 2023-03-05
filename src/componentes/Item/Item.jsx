import { Link } from "react-router-dom";
//Contexto
import { useDarkModeContext } from "../../context/DarkModeContext";

const Item = ({item}) => {
    
    const {darkMode} = useDarkModeContext()

    return (
        <div className={` ${darkMode ? "cardBodyDark" : "cardBody"}`}>
            <img src= {item.img} className="card-img-top grillaImg" alt={`Imagen de ${item.nombre}`} />
            <div className="card-body">
            <p className="card-text">{item.nombre}</p>
            <p className="card-text">{item.autor}</p>
            <p className="card-text">$ {new Intl.NumberFormat('de-DE').format (item.precio)}</p>
            <button className= {`btn ${darkMode ? "btn-dark":"btn-success"}`}><Link className = "nav-link" to = {`/item/${item.id}`}>Ver Producto</Link></button>
            </div>
        </div>
    );
}

export default Item;
