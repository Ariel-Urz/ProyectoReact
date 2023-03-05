import CartWidget from "../CartWidget/CartWidget";
import Categorias from "./Categorias/Categorias";
import Secciones from "./Secciones/Secciones";
import BotonDarkMode from "./BotonDarkMode/BotonDarkMode";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <div className="container-fluid">
            <img className='imgLogo' src="https://firebasestorage.googleapis.com/v0/b/bookhouseproyecto.appspot.com/o/LogoBook.png?alt=media&token=da4a05f5-a937-4db9-b1f2-b405615ae752" alt="" />
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                
                <Secciones/>
                <Categorias/>
              </ul>
              <CartWidget/>
              <BotonDarkMode/>
            </div>
          </div>
        </nav>
    );
}

export default Navbar;
