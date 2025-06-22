import React from "react";
import { Link } from "react-router-dom";
const CompraId = ({id}) =>{


    return(
        <div className="container container-fluid d-flex flex-column justify-content-center align-items-center">
            <h2>Compra Finalizada ✅</h2>
            <span className="d-block fs-5">El id de su compra es: <strong>{id}</strong></span>
            <span className="d-block fs-5">Muchas gracias por comprar!!!!</span>
            <Link to="/" className="btn btn-success mt-4">Volver a Inicio</Link>
        </div>
    )
}

export default CompraId