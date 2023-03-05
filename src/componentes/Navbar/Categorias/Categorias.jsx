import {Link} from "react-router-dom";
import React from "react";
const Categorias =React.memo(() => {
    return (
        
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Libros
          </a>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to={"/category/drama"}>Drama</Link></li>
            <li><Link className="dropdown-item" to={"/category/ciencia ficcion"}>Ciencia Ficcion</Link></li>
            <li><Link className="dropdown-item" to={"/category/terror"}>Terror</Link></li>
            <li><Link className="dropdown-item" to={"/category/policial"}>Policial</Link></li>
          </ul>
        </li>
        
    );
})

export default Categorias;
