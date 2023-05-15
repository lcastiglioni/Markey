import ItemCount from '../ItemCount/ItemCount';
import "./ItemDetail.css"
import React from 'react';


const ItemDetail = ({id, name, img, category, description, price, stock}) => {
    return(
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg"></img>
            </picture>
            <section>
                <p className="Info"> Categoria: ${category}</p>
                <p className="Info"> Descripcion: ${description}</p>
                <p className="Info"> Precio: ${price}</p>
            </section>
            <footer className="ItemFooter">
                <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log(`Compraste ${quantity} unidades`)}/>
            </footer>
        </article>
    )
}
export default ItemDetail