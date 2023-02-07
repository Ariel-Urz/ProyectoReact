import ItemCount from "../ItemCount/ItemCount";
const ItemDetail = ({item}) => {
    return (
            <div className="cardDetail card mb-3" style={{maxWidth: '540px'}}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img className="img-fluid rounded-start" src={`../img/${item.img}`} alt={`Imagen de ${item.nombre}`} />
                     </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{item.nombre}</h5>
                            <h4 className="card-title">{item.autor}</h4>
                            <p className="card-text">Sinopsis: {item.descripcion}</p>
                            <p className="card-text">Editorial: {item.editorial}</p>
                            <p className="card-text">Precio: ${new Intl.NumberFormat('de-DE').format (item.precio)}</p>
                            <p className="card-text">Stock: {item.stock}</p>
                            <ItemCount valInicial={1} stock = {item.stock}/>
                            <button className="btn btn-primary">Finalizar Compra</button>
                        </div>
                    </div>
                </div>
            </div>
  
    );
}

export default ItemDetail;
