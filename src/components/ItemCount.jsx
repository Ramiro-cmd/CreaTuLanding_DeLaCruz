import React, { useState } from "react";


const ItemCount = ({stock, onAdd}) =>{

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
    
    

    return(

        <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
            <div>
                <button className='btn btn-outline-danger' onClick={restar}>-</button>
                <span  className='btn'>{count}</span>
                <button className='btn btn-outline-success' onClick={sumar}>+</button>
            </div>
            <button className='btn btn-outline-primary' onClick={()=>onAdd(count)} >Agregar al carrito</button>
        </div>
    )
}

export default ItemCount