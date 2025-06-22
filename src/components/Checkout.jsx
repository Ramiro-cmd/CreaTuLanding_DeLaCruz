import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { db } from "../services/firebase"
import { serverTimestamp, addDoc, collection } from "firebase/firestore";
import { useForm } from "react-hook-form";
import CompraID from "./CompraId"
const Checkout = () =>{

    const [orderId, setOrderId] = useState("")
    const {cart, cartTotal, clear} = useContext(CartContext)
    const {register, handleSubmit, formState:{errors}, getValues} = useForm()

    const finalizarCompra = (data) =>{

        let orden = {
            comprador:{
                name: data.name,
                address: data.address,
                email: data.email
            },
            compra: cart,
            total: cartTotal(),
            date:serverTimestamp()

        }

        const ventas = collection(db,"orders")

        addDoc(ventas, orden)
        .then((res)=>{
            setOrderId(res.id)
            clear()
        })
        .catch((error)=> console.error(error))


    }

    return(
        <>
            {orderId
            ?   <div>
                    <CompraID id={orderId}/>
                </div>
            :
            <div className="container d-flex flex-column ">
                <h1>Datos para la compra</h1>
                <form onSubmit={handleSubmit(finalizarCompra)}>
                    <label className="mt-3 mb-2">Nombre Completo</label>
                    <input className="form-control" type="text" placeholder="Nombre Completo" name="name" {...register("name", {required:true, minLength:3})}/>
                    {errors?.name?.type === "required" && <span className="d-block" style={{color:"red"}}>Por favor complete el campo</span>}


                    <label className="mt-3 mb-2">Direccion de entrega</label>
                    <input className="form-control" type="text" placeholder="Domicilio" name="address" {...register("address", {required:true, minLength:5})}/>
                    {errors?.address?.type === "required" && <span className="d-block" style={{color:"red"}}>Por favor complete el campo</span>}
                    
                    
                    <label className="mt-3 mb-2">Correo electronico</label>
                    <input className="form-control" type="email" placeholder="Correo electronico" name="email" {...register("email", {required:true, minLength:10})} />
                    {errors?.email?.type === "required" && <span className="d-block" style={{color:"red"}}>Por favor complete el campo</span>}
                    
                    
                    <label className="mt-3 mb-2">Repita el correo electronico</label>
                    <input className="form-control" type="email" placeholder="Repita el correo" name="email2" {...register("secondemail", {required:true, validate:{equalsMails: mail2 => mail2 === getValues().email}})} />
                    {errors?.secondemail?.type === "required" && <span className="d-block" style={{color:"red"}}>Por favor complete el campo</span>}
                    {errors?.secondemail?.type === "equalsMails" && <span className="d-block" style={{color:'red'}}>Los mails no coinciden</span>}
                    
                    
                    <button className="btn btn-success mt-3" type="submit">Finalizar Compra</button>
                </form>
            </div>
            }
        </>

        
    )
}

export default Checkout