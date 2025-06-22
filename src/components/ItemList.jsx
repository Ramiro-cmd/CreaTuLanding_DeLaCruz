import React from "react";
import Item from "./Item";

const ItemList = ({data}) =>{


    return(
        
        <div className="container py-4">
            <div className="row">
                {data.map((prod) => (
                <div key={prod.id} className="col-12 col-sm-6 col-md-4 mb-4">
                    <Item prod={prod} />
                </div>
                ))}
            </div>
        </div>
    )
}

export default ItemList