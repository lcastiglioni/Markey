import CartWidget from "../CartWidget/CartWidget"
import logo from "../CartWidget/assets/logo.svg";
import "./NavBar.css";
import React from "react";
import { NavLink} from "react-router-dom";

const NavBar = () => {
    return (
    <nav className="NavBar">
        <NavLink exact to='/' alt="Markey">
            <img src={logo} alt="logo" />
        </NavLink>
        <div className="Categories">
            <NavLink to="/category/keyboards" className={( { isActive}) => isActive ? 'ActiveOption' : 'Option'} >Keyboards</NavLink>
            <NavLink to="/category/keycaps" className={( { isActive}) => isActive ? 'ActiveOption' : 'Option'} >Keycaps</NavLink>
            <NavLink to="/category/accesories" className={( { isActive }) => isActive ? 'ActiveOption' : 'Option'} >Accesorios</NavLink>
        </div>
        <CartWidget />
    </nav>
    )
}

export default NavBar