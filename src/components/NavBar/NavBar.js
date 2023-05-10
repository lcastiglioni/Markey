import CartWidget from "../CartWidget/CartWidget"
import logo from "../CartWidget/assets/logo.svg";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav>
        <a href="index.html" alt="Markey">
            <img src={logo} alt="logo" />
        </a>
        <div>
            <button>Keyboards</button>
            <button>Keycaps</button>
            <button>Accesories</button>
        </div>
        <CartWidget />
    </nav>
    )
}

export default NavBar