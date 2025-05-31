import "../css/Navbar.css"
import CartWidget from "./CartWidget"
import { NavLink } from "react-router-dom"

const Navbar = () =>{
    return(
        <nav className="navbar">

            <NavLink to="/">
                <img src="../logonav.png" alt="" />
            </NavLink>


            <div className="links-nav">
                <NavLink to="/category/hombre">Hombre</NavLink>
                <NavLink to="/category/mujer">Mujer</NavLink>
                <NavLink to="/category/ofertas">Ofertas</NavLink>
                <CartWidget />

            </div>

        </nav>
    )
    

}

export default Navbar