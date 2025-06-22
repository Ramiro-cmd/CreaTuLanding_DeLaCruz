import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartView from "./CartView";
import { Link } from "react-router-dom";
const Cart = () =>{

    const {cart} = useContext(CartContext)

    return(
        <>
         {cart.length ? <CartView/>:
            <div className="container-fluid  d-flex flex-column justify-content-center">
                <h2>🛒 Tu carrito  se encuentra vacio, porfavor ve a la pagina principal a revisar nuestros productos.</h2>
                <div>
                    <Link to="/" className="btn btn-success">Ir a Pagina principal</Link>
                </div>
            </div>}
        </>
    )
}

export default Cart