import Item from "../Item/Item"
import "./ItemList.css"
import React from "react";

const ItemList= ({products}) => {
    return(
        <div className='ListGroup'>
            {products.map(prod => <Item key={prod.id} {...prod} />)}
        </div>
    );
};

export default ItemList