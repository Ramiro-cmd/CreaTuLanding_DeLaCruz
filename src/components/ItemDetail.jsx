import React, { useContext, useState } from "react";
import ItemCount from "./ItemCount";

import { CartContext } from "../context/CartContext";
import { Link } from 'react-router-dom'
import toast, {Toaster} from "react-hot-toast";


const ItemDetail = ({detalle}) =>{

    const {addItem} = useContext(CartContext)

    const [compra,setCompra] = useState(false)
    const [talleSelec, setTalle] = useState(null)
    const talles = ["S","M","L","XL"]
    
    const notify = () => toast("prueba 123")

    const onAdd=(count)=>{
        addItem(detalle, count, talleSelec)
        setCompra(true)
        
    }

    return(//540px
        <div style={{display:"flex", justifyContent:"center"}}>
            <div className="card mb-3" style={{width: "1080px", height:"500px"}}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={detalle.img} className="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{detalle.name}</h5>
                            <p className="card-text">{detalle.description}</p>
                            <p className="card-text"><small className="text-body-secondary">Ultimos {detalle.stock}</small></p>
                            {talles.map((talle)=>(<button 
                            key={talle} 
                            onClick={()=>setTalle(talle)} 
                            className={`me-3 ${talleSelec === talle? "btn btn-info": "btn btn-outline-info"}`}>
                                {talle}</button>))}
                            {detalle.category === "ofertas" && <span className="d-block text-decoration-line-through mt-2">Precio: ${detalle.price + 10000}</span>}    
                            <span className="d-block mt-2" style={{color:`${detalle.category === "ofertas" && "#36B37E"}`}}>Precio: ${detalle.price}</span>

                            {compra? <div>
                                <Link to="/" className="btn btn-secondary m-2  ">Seguir Comprando</Link>
                                <Link to="/cart" className="btn btn-success m-2">Ir al Carrito</Link>

                            </div>
                            :<ItemCount stock={detalle.stock} onAdd={onAdd} talleVal={talleSelec} />}
                            
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail