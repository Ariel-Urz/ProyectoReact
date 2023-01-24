
const Categorias = () => {
    return (
        
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Libros
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Drama</a></li>
            <li><a className="dropdown-item" href="#">Ciencia Ficcion</a></li>
            <li><a className="dropdown-item" href="#">Terror</a></li>
            <li><a className="dropdown-item" href="#">Policial</a></li>
          </ul>
        </li>
        
    );
}

export default Categorias;
