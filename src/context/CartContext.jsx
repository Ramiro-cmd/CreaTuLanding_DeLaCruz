import React, { createContext, useState } from "react";

//contexto
export const CartContext = createContext()

//proveedor

export const CartProvider = ({children}) =>{

    const [cart, setCart] = useState([])

    //add cart
    const addItem = (item,cantidad,talle) =>{
        if(isInCart(item.id)){

            const updateCart = cart.map((prod)=> {
                if(prod.id === item.id){
                    return {...prod, quanity: prod.quanity + cantidad}
                }else{
                    return prod
                }
            })
            setCart(updateCart)
        }else{

            setCart([...cart,{...item, quanity:cantidad, talle}])
        }
    }

    //delete item cart
    const removeItem = (id) =>{
        setCart(cart.filter((prod)=> prod.id !== id))
    }

    //delete cart
    const clear = () =>{
        setCart([])
    }

    //true o false
    const isInCart = (id) =>{
        return cart.some((prod)=> prod.id === id)
    }

    const cartQuantity = () =>{
        return cart.reduce((acc, prod)=> acc += prod.quanity,0)
    }

    //total carrito
    const cartTotal = () =>{
        return cart.reduce((acc,prod)=> acc += (prod.quanity * prod.price), 0)
    }

    return(
        <CartContext.Provider value={{cart, addItem, removeItem, clear, isInCart, cartQuantity, cartTotal}}>
            {children}
        </CartContext.Provider>
    )
}