import React from 'react'
import { useParams } from 'react-router-dom'

export function ItemDetailContainer({ products }) {
    const { id } = useParams()
    const product = products.find(p => p.id === parseInt(id))

    if (!product) {
        return <p>Producto no encontrado</p>
    }

    return (
        <div className='product-detail'>
            <h1 className='product-detail-title'>{product.name}</h1>
            <p>Categoría: {product.category}</p>
            <img src={`/${product.img}`} alt={product.name} style={{ width: '250px', height: '250px' }}/>
            <p className='product-detail-price'>Precio: ${product.price}</p>

            <button className='cart-button'>Agregar a carrito</button>
        </div>
    )
}
