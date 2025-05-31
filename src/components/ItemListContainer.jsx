import { useEffect, useState } from "react"
import { getProducts } from "./mock/AsyncService"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"


const ItemListContainer = ({texto}) => {

    const [data,setData] = useState([])
    const {categoryId} = useParams()


    useEffect(()=>{
        getProducts()
        .then((res)=>{
            if(categoryId){
                setData(res.filter((prod)=> prod.category === categoryId))
            }else{
                setData(res)
            }
        })
        .catch((error)=>console.error(error))
    },[categoryId])




    
    return(
        <div style={{textAlign:"center"}}>
            <h1>{texto}</h1>
            <ItemList data={data}/>
        </div>
    )
}

export default ItemListContainer