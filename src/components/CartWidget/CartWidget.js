import cart from "./assets/cart.svg"


const CartWidget = () => {
    return (
        <div className="style">
            <img src={cart} alt="cart"/>
            0
        </div>
    )
}

export default CartWidget