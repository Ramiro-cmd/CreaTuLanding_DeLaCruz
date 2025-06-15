import React, { useState } from "react";


const ItemCount = ({stock, onAdd, talleVal}) =>{

    const [count,setCount] = useState(1)

    const restar = () =>{
        if(count> 1){
            setCount(count - 1)
        }
    }

    const sumar = () =>{
        if(count<stock){
            setCount(count + 1)
        }
    }
    
    const handleClick = () =>{
        if(!talleVal){
            alert("Selecciona un talle antes de agregar al carrito")
            return
        }
        onAdd(count)
    }
    

    return(

        <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
            <div>
                <button className='btn btn-outline-danger' onClick={restar}>-</button>
                <span  className='btn'>{count}</span>
                <button className='btn btn-outline-success' onClick={sumar}>+</button>
            </div>
            <button className='btn btn-outline-primary' onClick={handleClick} >Agregar al carrito</button>
        </div>
    )
}

export default ItemCount