import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav>
            <h3>MarketCode</h3>
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