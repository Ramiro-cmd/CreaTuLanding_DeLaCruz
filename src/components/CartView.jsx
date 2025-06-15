import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartItem from "./CartItem";

const CartView = () =>{

    const {cart, cartTotal, clear, removeItem} = useContext(CartContext)

    return(
        <>
        <div>
            <h2>Tu carrito</h2>
        </div>
        <div className="container-md">
            <table className="table table-sm table-hover">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Producto</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Talle</th>
                        <th scope="col">Precio</th>
                        <th scope="col"></th>

                    </tr>
                </thead>
                <tbody>
                    {cart.map((art)=> <CartItem key={art.id} art={art} removeItem={removeItem}/>)}
                </tbody>
                <tfoot>
                        <th></th>
                        <th></th>
                        <th><button className="btn btn-danger" onClick={()=>clear()}>Vaciar Carrito</button></th>
                        <th><button className="btn btn-success">Finalizar Compra</button></th>
                        <th>Total: ${cartTotal()}</th>

                </tfoot>
            </table>
        </div>
        
        
        </>
        
    )
}


export default CartView