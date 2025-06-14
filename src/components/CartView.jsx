import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartItem from "./CartItem";

const CartView = () =>{

    const {cart, cartTotal, clear, removeItem} = useContext(CartContext)

    return(
        <div>
            <h2>Tu carrito</h2>
            {cart.map((art)=><CartItem key={art.id} art={art}/>)}
        </div>
    )
}


export default CartView