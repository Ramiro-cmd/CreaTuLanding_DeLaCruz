import React, { useEffect, useState } from "react";
import { getOneProduct } from "../mock/AsyncService";
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom";
import LoaderComponent from "./LoaderComponent";
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../services/firebase";

const ItemDetailContainer = () =>{

    const [detail, setDetail] = useState({})
    const {itemId} = useParams()
    const [loading,setLoading] = useState(false)
    const [invalid, setInvalid] = useState(false)
    
    //FIREBASE
    useEffect(()=>{
        setLoading(true)

        const productsCollection = collection(db, "prendas")
        //crear referencia de doc
        const docRef = doc(productsCollection, itemId)

        getDoc(docRef)
        .then((res)=>{
            if(res.data()){
                setDetail({...res.data(), id:res.id})
            }else{
                setInvalid(true)
            }
        })
        .catch((error)=> console.log(error))
        .finally(()=> setLoading(false))

    },[])

    if(invalid){
        return(
            <div>
                <h2>El producto no existe</h2>
            </div>
        )
    }

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