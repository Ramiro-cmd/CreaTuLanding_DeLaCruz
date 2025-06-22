import { useEffect, useState } from "react"
import { getProducts, products } from "../mock/AsyncService"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import LoaderComponent from "./LoaderComponent"
import { addDoc, collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../services/firebase"


const ItemListContainer = ({texto}) => {

    
    const [data,setData] = useState([])
    const {categoryId} = useParams()
    const [loading,setLoading] = useState(false)

    //Conexion a firebase

    useEffect(()=>{
        setLoading(true)
        //conec coleccioon

        const productsCollection = categoryId ? query(collection(db, "prendas"), where("category", "==", categoryId)) : collection(db, "prendas")
        //pedir docs
        getDocs(productsCollection)
        .then((res)=>{
            const list = res.docs.map((doc)=>{
                return{
                    ...doc.data(),
                    id:doc.id
                }
            })
            setData(list)
        })
        .catch((error)=> console.log(error))
        .finally(()=>setLoading(false))


    },[categoryId])



    // const subirDatos = () =>{
    //     const prodCollectionAdd = collection(db, "prendas")
    //     products.map((item)=> addDoc(prodCollectionAdd, item))
    // }


    
    return(

        <>
            {loading
            ? <LoaderComponent/>
            :<div style={{textAlign:"center"}}>
                <h1>{texto}{categoryId && <span>{categoryId}</span>}</h1>
                <ItemList data={data}/>
            </div> }
        </>


        
    )
}

export default ItemListContainer