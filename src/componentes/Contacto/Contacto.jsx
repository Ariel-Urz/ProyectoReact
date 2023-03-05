import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Contacto = () => {

    const datosFormulario = React.useRef() //referencia
    let navigate = useNavigate() //ubicacion actual del component
    const consultarFormulario = (e) =>{
        e.preventDefault()
        console.log(datosFormulario.current)
        const datForm = new FormData(datosFormulario.current) // genero un iterator
        const contacto = Object.fromEntries(datForm) // transforma en un objeto
        console.log(contacto)
        e.target.reset() //resetea formulario
        toast.success("consulta enviada")
        navigate("/") //redirige a index


    }

    return (

        <div className='container' style={{margin: '50px'}}>
            <form  className="row g-3" onSubmit={consultarFormulario} ref={datosFormulario}>
            <h1 className='text'>Contacto</h1>
            <div className="col-md-8">
                <label className="form-label text">Nombre</label>
                <input className="form-control" type="text" name="nombre" placeholder="Nombre" required /> 
            </div>
            <div className="col-md-8">
                <label htmlFor="inputEmail4" className="form-label text" >Email</label>
                <input name="email" type="email" className="form-control" placeholder="Correo " required />
            </div>
            <div className="col-md-8">
                <label className="form-label text ">Asunto</label>
                <input name="asunto" className="form-control" type="text" placeholder="Asunto" required /> 
            </div>
            <label className="form-label text">Mensaje</label>
            <div className="col-8 form-floating">
                <textarea name="mensaje" className="form-control" placeholder="Leave a comment here" defaultValue={""} />
            </div>
            <div className="col-8">
                <button type="submit" className="btn btn-dark">Enviar</button>
            </div>
            </form>
        </div>

        
    );
}

export default Contacto;
