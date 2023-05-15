import { useState} from "react";
import "./ItemCount.css";

export const ItemCount = ({stock, initial, onAdd}) => {
    const [count, setCount] = useState(parseInt(initial));

    const increment = () =>{
        setCount(count + 1);
    };

    const decrement =() => {
        setCount(count - 1);
    };
    


    return(
        <div className='Counter'>
            <button className="Decrement" disable={count <= 1} onClick={decrement}>-</button>
            <span className="Count">{count}</span>
            <button className="Increment" disable={count >= stock} onClick={increment}>+</button>
            <div>
                <button className="Button" disabled={stock <= 0} onClick={() => onAdd(count)} >
                Agregar al carrito
                </button>
            </div>
        </div>
    );
};

export default ItemCount