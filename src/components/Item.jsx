import React from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from './Context';

const Item = ({ name, price, id, img }) => {

    const { agregarAlCarrito } = useAppContext();

    return (
        
        <div key={id}>
            <Link to={`/detalle/${id}`} style={{ textDecoration: 'none' }}>
                <div className='product-card'>
                    <img 
                        src={img} 
                        alt={name} 
                        style={{ width: '150px', height: '150px', borderRadius: '8px' }}
                        />
                    <p className='product-card-name'>{name}</p>
                    <p className='product-card-price'>Precio: ${price}</p>
                </div>
            </Link>
                <button className='boton-agregar-carrito' onClick={() => agregarAlCarrito(id)}>Agregar al carrito</button>
        </div>
        
    );
};

export default Item;