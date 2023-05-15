import { useEffect, useState } from "react"
import { getProducts } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
import React from "react"

const ItemListConteiner = ({ greeting }) => { 
    const [products, setProducts] = useState([])

    useEffect(()=>{
        getProducts()
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [])
    return (
    <>
        <h1>{greeting}</h1>
        <ItemList products={products}/>
    </>
    
    )
}
export default ItemListConteiner