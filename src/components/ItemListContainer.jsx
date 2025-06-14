import { useEffect, useState } from "react"
import { getProducts } from "../mock/AsyncService"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import LoaderComponent from "./LoaderComponent"


const ItemListContainer = ({texto}) => {

    
    const [data,setData] = useState([])
    const {categoryId} = useParams()
    const [loading,setLoading] = useState(false)

    useEffect(()=>{
        setLoading(true)
        getProducts()
        .then((res)=>{
            if(categoryId){
                setData(res.filter((prod)=> prod.category === categoryId))
            }else{
                setData(res)
            }
        })
        .catch((error)=>console.error(error))
        .finally(()=> setLoading(false))
    },[categoryId])




    
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