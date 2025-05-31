import React, { useEffect, useState } from "react";
import { getOneProduct } from "./mock/AsyncService";
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom";

const ItemDetailContainer = () =>{

    const [detail, setDetail] = useState({})
    const {itemId} = useParams()

    useEffect(()=>{
        getOneProduct(itemId)
        .then((res)=> setDetail(res))
        .catch((error)=> console.error(error))
    },[])

    return(
        <div>
            <ItemDetail detalle={detail}/>
        </div>
    )
}

export default ItemDetailContainer