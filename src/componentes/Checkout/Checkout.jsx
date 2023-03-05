import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { useCarritoContext } from '../../context/CarritoContext';
import { useNavigate } from 'react-router-dom';
import {toast} from "react-toastify"
import { createOrdenCompra, getOrdenCompra, getProducto, updateProducto } from '../../firebase/firebase';

const Checkout = () => {

    const {register,handleSubmit,formState: { errors },getValues}= useForm()
    const {carrito,emptyCart,totalPrice} = useCarritoContext()
    let navigate = useNavigate()

    const consultarFormulario = (data) => {
        //console.log(data)
        const cliente = data
        const aux = [...carrito]
        aux.forEach(prodCarrito => {
            getProducto(prodCarrito.id).then(prodBDD => {
                prodBDD.stock -= prodCarrito.cant
                updateProducto(prodCarrito.id, prodBDD)
            })
        })


        createOrdenCompra(cliente, aux, totalPrice(), new Date().toISOString()).then(ordenCompra =>{
            toast.success(`Gracias por su compra, su orden de compra ${ordenCompra.id} por un total de $${new Intl.NumberFormat("de-DE").format(totalPrice())} fue realizada con exito`)
            emptyCart()
            navigate("/")
        })
    }

    return (

        <>
            {carrito.length === 0
            ?
            <>
                <h2 className='requerid'>Carrito Vacio</h2>
                <Link className='nav-link' to={"/"}><button className='btn btn-primary'> Continuar Comprando</button></Link>
            </>
            :
            <div className='container' style={{margin: '50px'}}>
                <h1 className='requerid'>Formulario Orden de Compra</h1>
                    <form className="row g-3" onSubmit={handleSubmit(consultarFormulario)}>
                        <div className="col-md-8 text">
                                <label className="form-label">Nombre y Apellido</label>
                                <input className="form-control" type="text" {...register("nombre",{required: true})} placeholder="Nombre y Apellido"/>
                                {errors.nombre?.type === "required" && <p className='requerid'>🔥 Campo Requerido</p>} 
                        </div>
                        <div className="col-md-8 text">
                                <label htmlFor="inputEmail4" className="form-label" >Email</label>
                                <input type="email" className="form-control" {...register("email",{required: true,pattern: /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/})} placeholder="Correo "/>
                                {errors.email?.type === "required" && <p className='requerid'>🔥 Campo Requerido</p>} 
                                {errors.email?.type === "pattern" && <p className='requerid'>📝 Formato de Email Incorrecto</p>}
                        </div>
                        <div className="col-md-8 text">
                                <label htmlFor="inputEmail4" className="form-label" >Confirmar Email</label>
                                <input type="email" className="form-control" {...register("confEmail",{required: true,
                                validate: {
                                    matchesPreviousEmail: (value) => {
                                        const { email } = getValues();
                                        return email === value || "Los Email no Coinciden";
                                    }
                                        }})} placeholder="Confirmar Correo "/>
                                {errors.confEmail && ( <p className='requerid'>📝{errors.confEmail.message}</p>)}
                        </div>
                        <div className="col-md-8 text">
                                <label className="form-label ">Celular</label>
                                <input className="form-control" type="number" {...register("celular",{required: true,minLength: 6, maxLength: 12})} placeholder="Celular"/> 
                                {errors.celular?.type === "required" && <p className='requerid'>🔥 Campo Requerido</p>}
                                {errors.celular?.type === "maxLength" && <p className='requerid'>📱 Coloce un numero de celular valido</p>}
                                {errors.celular?.type === "minLength" && <p className='requerid'>📱 Coloce un numero de celular valido</p>}
                        </div>
                        <div className="col-md-8 text">
                                <label className="form-label ">Direccion</label>
                                <input className="form-control" type="text" {...register("direccion",{required: true})} placeholder="Direccion"/>
                                {errors.direccion?.type === "required" && <p className='requerid'>🔥 Campo Requerido</p>}  
                        </div>
                        <div className="col-8">
                                <button type="submit" className="btn btn-primary">Finalizar Compra</button>
                        </div>

                    </form>
             </div>
             }
        </>
    );
}

export default Checkout;
