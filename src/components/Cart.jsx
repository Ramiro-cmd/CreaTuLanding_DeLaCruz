import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartView from "./CartView";
const Cart = () =>{

    const {cart} = useContext(CartContext)

    return(
        <>
         {cart.length ? <CartView/>:<span>Vacio</span>}
        </>
    )
}

export default Cart