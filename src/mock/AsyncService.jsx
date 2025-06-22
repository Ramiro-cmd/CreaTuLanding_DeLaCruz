export const products = [
    {
        name: "Remera blanca de mujer",
        price: 15000,
        description: "Lorem ipsum lorem Lorem ipsum lorem ipsum lorem ipsum lorem Lorem ipsum lorem ipsum lorem",
        stock: 20,
        img: "https://images.unsplash.com/photo-1554568218-0f1715e72254?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        category:"mujer"
    },
    {
        name: "Pantalon jean de hombre",
        price: 15000,
        description: "Lorem ipsum lorem Lorem ipsum lorem ipsum lorem ipsum lorem Lorem ipsum lorem ipsum lorem ",
        stock: 20,
        img: "https://plus.unsplash.com/premium_photo-1688497831535-120bd47d9f9c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        category:"hombre"
    },
    {
        name: "Pantalon jean de mujer",
        price: 15000,
        description: "Lorem ipsum lorem Lorem ipsum lorem ipsum lorem ipsum lorem Lorem ipsum lorem ipsum lorem",
        stock: 20,
        img: "https://images.unsplash.com/photo-1598554747436-c9293d6a588f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        category:"mujer"
    },
    {
        name: "Buzo naranja de mujer",
        price: 15000,
        description: "Lorem ipsum lorem Lorem ipsum lorem ipsum lorem ipsum lorem Lorem ipsum lorem ipsum lorem",
        stock: 20,
        img: "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        category:"ofertas"
    },
    {
        name: "Buzo marron de hombre",
        price: 15000,
        description: "Lorem ipsum lorem Lorem ipsum lorem ipsum lorem ipsum lorem Lorem ipsum lorem ipsum lorem",
        stock: 20,
        img: "https://images.unsplash.com/photo-1604272490759-7c465473958a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI4fHxwcmVuZGFzJTIwZGUlMjByb3BhfGVufDB8fDB8fHww",
        category:"ofertas"
    }



]



let error = false

export const getProducts = () =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(!error){
                resolve(products)
            }else{
                reject("Error al obtener los datos")
            }
        },2000)
    })
}

export const getOneProduct = (id) =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(!error){
                let oneProduct = products.find((product)=> product.id === parseInt(id))
                resolve(oneProduct)
            }else{
                reject("Hubo un error al obtener el item")
            }
        },2000)
    })
}



