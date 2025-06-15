import React from "react";
import { CartContext } from "../context/CartContext";

const CartItem = ({art, removeItem}) =>{

    

    return(
        <>
            <tr>
                <td><img src={art.img} alt={art.name} style={{width:"80px", height:"80px"}} /></td>
                <td>{art.name}</td>
                <td>{art.quanity}</td>
                <td>{art.talle}</td>
                <td>${art.quanity * art.price}</td>
                <td><button className="btn btn-outline-danger" onClick={()=>removeItem(art.id)}>X</button></td>

            </tr>
            


        </>

    )
}

export default CartItem