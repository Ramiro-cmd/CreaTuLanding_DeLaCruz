import "../css/Navbar.css"
import CartWidget from "./CartWidget"
const Navbar = () =>{
    return(
        <nav className="navbar">
            <img src="../logonav.png" alt="" />

            <div className="links-nav">
                <a href="">Hombre</a>
                <a href="">Mujer</a>
                <a href="">Ofertas</a>
                <CartWidget />

            </div>

        </nav>
    )
    

}

export default Navbar