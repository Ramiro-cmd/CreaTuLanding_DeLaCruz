import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
const CartView = () =>{

    const {cart, cartTotal, clear, removeItem} = useContext(CartContext)

    return(
        <>
        <div className="container container-fluid d-flex flex-column justify-content-center align-items-center">
           
            <h2>Tu carrito 🛒</h2>

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
                        <tr>
                            <th></th>
                            <th></th>
                            <th><button className="btn btn-danger" onClick={()=>clear()}>Vaciar Carrito</button></th>
                            <th><Link to="/checkout" className="btn btn-success">Finalizar Compra</Link></th>
                            <th>Total: ${cartTotal()}</th>
                        </tr>
                    </tfoot>
                </table>
            </div>

        </div>
        
        
        
        </>
        
    )
}


export default CartView