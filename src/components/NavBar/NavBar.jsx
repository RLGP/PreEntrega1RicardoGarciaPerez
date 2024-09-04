import "./NavBar.css";
import aperture_logo_negro from "../../assets/aperture_logo_negro.png";
import CartWidget from "../CartWidget/CartWidget";

function NavBar() {
  return (
    <nav className="navbar">
        <div>
            <img className="logo" src={aperture_logo_negro} alt="logo de la marca" />
        </div>
        <ul className="navbar-links">
            <li className="navbar-items">
                <a href="">Home</a>
            </li>
            <li className="navbar-items">
                <a href="">Productos</a>
            </li>
            <li className="navbar-items">
                <a href="">Contactos</a>
            </li>
            <li className="navbar-items">
                <a href="">Ayuda</a>
            </li>
        </ul>
        <CartWidget/>
    </nav>
  )
}

export default NavBar