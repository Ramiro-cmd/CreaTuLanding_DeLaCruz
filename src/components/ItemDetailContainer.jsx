import React, { useEffect, useState } from "react";
import { getOneProduct } from "../mock/AsyncService";
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom";
import LoaderComponent from "./LoaderComponent";

const ItemDetailContainer = () =>{

    const [detail, setDetail] = useState({})
    const {itemId} = useParams()
    const [loading,setLoading] = useState(false)
    
    useEffect(()=>{
        setLoading(true)
        getOneProduct(itemId)
        .then((res)=> setDetail(res))
        .catch((error)=> console.error(error))
        .finally(()=>setLoading(false))
    },[])

    return(
        <>
            {loading? <LoaderComponent/>
            :<div>
                <ItemDetail detalle={detail}/>
            </div>}        
        </>


        
    )
}

export default ItemDetailContainer