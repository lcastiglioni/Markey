import { useState } from "react";

const ItemCount = (stock, initial, onAdd) => {
    const[quantity, setQuantity] = useState(initial);
    const [cartItems, setCartItems] = useState([]);

    const increment = () =>{
        if(quantity < stock) {
            setQuantity(quantity+1);
        }
    };

    const decrement =() => {
        if(quantity > 0) {
            setQuantity(quantity - 1);
        }
    };

    const addToCart = () => {
        const newItem ={
            name: `Product ${quantity}`,
            count: quantity
        };
        setCartItems([...cartItems, newItem]);
        onAdd(newItem);
    }

    return(
        <div className="Counter">
            <div className="Controls">
                <button className="Button" onClick={decrement}>-</button>
                <h4 className="Number">{quantity.initial}</h4>
                <button className="Button" onClick={increment}>+</button>
                
            </div>
            <div>
                <button className="Button" onClick={addToCart.count} disabled={!stock}>
                    Agregar al carrito
                </button>
            </div>
        </div>
    );
};

export default ItemCount