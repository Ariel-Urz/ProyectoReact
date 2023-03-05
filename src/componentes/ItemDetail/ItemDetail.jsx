import ItemCount from "../ItemCount/ItemCount";
//Contexto
import { useDarkModeContext } from "../../context/DarkModeContext";
import { useCarritoContext } from "../../context/CarritoContext";
import { Link } from "react-router-dom";

const ItemDetail = ({item}) => {

    const {darkMode} = useDarkModeContext()
    const {addItem} = useCarritoContext()
    const onAdd = (cantidad) =>{
      addItem(item,cantidad)
    }

    return (
            <div className= {`card mb-3 ${darkMode ? "cardDetailDark" : "cardDetail"}`}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img className="img-fluid rounded-start" src={item.img} alt={`Imagen de ${item.nombre}`} />
                     </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{item.nombre}</h5>
                            <h4 className="card-title">Autor: {item.autor}</h4>
                            <p className="card-text">Sinopsis: {item.descripcion}</p>
                            <p className="card-text">Editorial: {item.editorial}</p>
                            <p className="card-text">Genero: {item.idCategory}</p>
                            <p className="card-text">Precio: ${new Intl.NumberFormat('de-DE').format (item.precio)}</p>
                            <p className="card-text">Stock: {item.stock}</p>
                            <ItemCount valInicial={1} stock = {item.stock} onAdd={onAdd}/>
                            <Link className='nav-link' to={"/cart"}><button className={` btn ${darkMode ?  "btn-dark" : "btn-primary"}`}> Finalizar Compra</button></Link>
                        </div>
                    </div>
                </div>
            </div>
  
    );
}

export default ItemDetail;
