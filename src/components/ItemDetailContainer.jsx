import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppContext } from './Context';

export function ItemDetailContainer() {
    const { id } = useParams();
    const { productos, agregarAlCarrito } = useAppContext();
    const [productoSeleccionado, setProductoSeleccionado] = useState(null);
    const [cantidad, setCantidad] = useState(1);

    useEffect(() => {
        if (productos.length > 0) {
            const findProduct = productos.find(el => el.id === parseInt(id));
            setProductoSeleccionado(findProduct);
        }
    }, [id, productos]);

    const handleIncrementar = () => {
        setCantidad(cantidadPrevia => cantidadPrevia + 1);
    };

    const handleDecrementar = () => {
        setCantidad(cantidadPrevia => (cantidadPrevia > 1 ? cantidadPrevia - 1 : 1));
    };

    const handleAgregarAlCarrito = () => {
        for (let i = 0; i < cantidad; i++) {
            agregarAlCarrito(productoSeleccionado.id);
        }
        setCantidad(1);
    };

    if (!productoSeleccionado) {
        return <p>Producto no encontrado</p>;
    }

    return (
        <div className='product-detail'>
            <h1 className='product-detail-title'>{productoSeleccionado.name}</h1>
            <div className='detail-container'>
                <img 
                    src={`/${productoSeleccionado.img}`} 
                    alt={productoSeleccionado.name} 
                    style={{ width: '250px', height: '250px' }}
                />
                <div className='detail-container-info'>
                
                    <p className='product-detail-price'>Precio: ${productoSeleccionado.price}</p>
                    <p>Categoría: {productoSeleccionado.category}</p>

                    <div className="control-cantidad">
                        <button className='boton-cantidad' onClick={handleDecrementar}>-</button>
                        <span>{cantidad}</span>
                        <button className='boton-cantidad' onClick={handleIncrementar}>+</button>
                    </div>

                    <button className='cart-button' onClick={handleAgregarAlCarrito}>
                        Agregar {cantidad} {cantidad > 1 ? 'unidades' : 'unidad'} al carrito
                    </button>
                </div>

            </div>
            
        </div>
    );
};
