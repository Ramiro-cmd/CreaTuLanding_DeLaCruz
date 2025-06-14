import { useContext } from "react";
import { RiShoppingCartLine } from "react-icons/ri";
import { CartContext } from "../context/CartContext";

const CartWidget = () =>{

    const {cartQuantity} = useContext(CartContext)

    return(
        
        <><RiShoppingCartLine />{cartQuantity()}</>
        
    )
}

export default CartWidget