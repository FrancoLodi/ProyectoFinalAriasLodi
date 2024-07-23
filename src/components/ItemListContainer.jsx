import React, { useState } from 'react'
import { Link } from 'react-router-dom'

// Componente ItemListContainer con filtros de categoría
export function ItemListContainer ({ products }) {
    const [filter, setFilter] = useState('All')

    const filteredProducts = filter === 'All' ? products : products.filter(product => product.category === filter)

    return (
        <div>
            <h1 className='titulo-productos'>Nuestros productos</h1>

            <div className="filter-buttons">
                <button 
                    onClick={() => setFilter('All')} 
                    className={filter === 'All' ? 'active' : ''}
                >
                    Todos
                </button>
                <button 
                    onClick={() => setFilter('Remeras')} 
                    className={filter === 'Remeras' ? 'active' : ''}
                >
                    Remeras
                </button>
                <button 
                    onClick={() => setFilter('Pantalones')} 
                    className={filter === 'Pantalones' ? 'active' : ''}
                >
                    Pantalones
                </button>
            </div>

            <div className='lista-items'>
                {filteredProducts.map(product => (
                    <div key={product.id}>
                        <Link to={`/lista/${product.id}`}>
                            <div className='product-card'>
                                <img 
                                    src={`/${product.img}`} 
                                    alt={product.name} 
                                    style={{ width: '150px', height: '150px', borderRadius: '8px' }}
                                />
                                <p className='product-card-name'>{product.name}</p>
                                <p className='product-card-price'>Precio: ${product.price}</p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}
