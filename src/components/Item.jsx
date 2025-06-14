import React from "react";
import "../css/Cards.css"
import { Link } from "react-router-dom";

const Item = ({prod}) =>{
    
    
    return(

        <div className="card" style={{width: "18rem"}}>
            <img src={prod.img} className="card-img-top" alt="Prenda de Ropa"/>
            <div className="card-body">
                <h5 className="card-title">{prod.name}</h5>
                <p className="card-text">{prod.description}</p>
                <span className="price">${prod.price}</span>
                <Link to={`/item/${prod.id}`} className="btn btn-card">Ver producto</Link>
            </div>
        </div>
    )
}

export default Item