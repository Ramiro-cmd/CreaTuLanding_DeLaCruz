import React from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({detalle}) =>{

    const onAdd=(count)=>{
        alert(`Se han añadido ${count} al carrito`)
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
                        <p className="card-text">Precio: ${detalle.price}</p>
                        
                        <ItemCount stock={detalle.stock} onAdd={onAdd} />
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail