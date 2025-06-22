import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { db } from "../services/firebase"
import { serverTimestamp, addDoc, collection } from "firebase/firestore";
import { useForm } from "react-hook-form";

const Checkout = () =>{

    const [orderId, setOrderId] = useState("")
    const {cart, cartTotal, clear} = useContext(CartContext)
    const {register, handleSubmit, formState:{errors}, getValues} = useForm()

    const finalizarCompra = (e) =>{

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
                    <h2>Compra Finalizada</h2>
                    <span>El id es:{orderId}</span>
                </div>
            :
            <div>
                <h1>Datos para la compra</h1>
                <form onSubmit={handleSubmit(finalizarCompra)}>
                    <input className="form-control" type="text" placeholder="Nombre Completo" name="name" {...register("name", {required:true, minLength:3})}/>
                    {errors?.name?.type === "required" && <span></span>}
                    <input className="form-control" type="text" placeholder="Domicilio" name="address" />
                    <input className="form-control" type="email" placeholder="Correo electronico" name="email" />
                    <input className="form-control" type="email" placeholder="Repita el correo" name="email2" />
                    <button className="btn btn-success" type="submit">Finalizar Compra</button>
                </form>
            </div>
            }
        </>

        
    )
}

export default Checkout