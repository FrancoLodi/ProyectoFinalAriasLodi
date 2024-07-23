import React from 'react'
import { useParams } from 'react-router-dom'

export function ItemDetailContainer({ products }) {
    const { id } = useParams()
    const product = products.find(p => p.id === parseInt(id))

    if (!product) {
        return <p>Producto no encontrado</p>
    }

    return (
        <div>
            <h1>{product.name}</h1>
            <p>Categoría: {product.category}</p>
            <img src={`/${product.img}`} alt={product.name} style={{ width: '200px', height: '200px' }}/>
            <p>Precio: ${product.price}</p>
        </div>
    )
}
