import React from 'react'
import { Link } from 'react-router-dom'

//  hacer tarjeta para los productos y cargar imagenes default

export function ItemListContainer ({ products }) {
    return (
        <div>
            <h1 className='titulo-productos'>Nuestros productos</h1>
            <div className='lista-items'>
                {products.map(product => (
                    <div key={product.id}>
                        <Link to={`/lista/${product.id}`}>
                            <div>
                                <img 
                                    src={`/${product.img}` || 'path_to_fallback_image.jpg'} 
                                    alt={product.name} 
                                    style={{ width: '150px', height: '150px' }}
                                />
                                <p>{product.name} - {product.category}</p>
                                <p>Precio: ${product.price}</p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}