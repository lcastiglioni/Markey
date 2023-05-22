import cart from "./assets/cart.png"
import React from "react"

const CartWidget = () => {
    return (
        <div className="style">
            <img src={cart} alt="cart"/>
            0
        </div>
    )
}

export default CartWidget