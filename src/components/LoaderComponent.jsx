import React from "react";
import { BounceLoader } from "react-spinners";

const LoaderComponent = () =>{

    return(
        <div style={{display:"flex", justifyContent:"center", alignItems:"center", width:"100%", height:"85vh"}}>
            <BounceLoader color="#FF513D" size={150} />
        </div>
    )

}

export default LoaderComponent