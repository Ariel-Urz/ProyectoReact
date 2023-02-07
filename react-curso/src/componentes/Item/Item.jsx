import { Link } from "react-router-dom";

const Item = ({item}) => {
    return (
        <div className="card" style={{width: '18rem'}}>
            <img src= {`../img/${item.img}`} className="card-img-top grillaImg" alt={`Imagen de ${item.nombre}`} />
            <div className="card-body">
            <h5 className="card-title">{item.nombre}</h5>
            <p className="card-text">{item.autor}</p>
            <p className="card-text">$ {new Intl.NumberFormat('de-DE').format (item.precio)}</p>
            <button className="btn btn-success"><Link className = "nav-link" to = {`/item/${item.id}`}>Ver Producto</Link></button>
            </div>
        </div>
    );
}

export default Item;
