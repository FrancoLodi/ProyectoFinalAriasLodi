import React from 'react';
import { useAppContext } from './Context';
import { useNavigate } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
    const { carrito, agregarAlCarrito, quitarDelCarrito, limpiarCarrito, restarAlCarrito } = useAppContext();
    const navigate = useNavigate();

    const handleIncrementar = (id) => {
        agregarAlCarrito(id);
    };

    const handleDecrementar = (id) => {
        const producto = carrito.find(item => item.id === id);
        if (producto.cantidad > 1) {
            restarAlCarrito(id);
        } else {
            quitarDelCarrito(id);
        }
    };

    const handleEliminar = (id) => {
        quitarDelCarrito(id);
    };

    const subtotal = carrito.reduce((total, producto) => {
        return total + producto.price * (producto.cantidad || 1);
    }, 0);

    return (
        <div className='contenedor-carrito'>
            {carrito.length > 0 ? (
                <div className='contenedor-carrito-detail'>
                    <h1 className='carrito-title'>Carrito</h1>
                    <ul className='carrito-productos'>
                        {carrito.map((producto) => (
                            <li key={producto.id} style={{ display:'flex', gap:'20px' }}>
                                <>
                                    <img 
                                        src={`/${producto.img}`}
                                        alt={producto.name} 
                                        style={{ width: '80px', height: '80px', borderRadius: '8px' }}    
                                    />
                                </>
                                <>
                                    <p>{producto.name}</p>
                                    <p>Precio: ${producto.price}</p>
                                    <p>Cantidad: {producto.cantidad || 1}</p> {}
                                    <button className='carrito-boton-cantidad' onClick={() => handleIncrementar(producto.id)}>Agregar unidad</button>
                                    <button className='carrito-boton-cantidad' onClick={() => handleDecrementar(producto.id)}>Quitar unidad</button>
                                    <button className='carrito-boton-cantidad' onClick={() => handleEliminar(producto.id)}>
                                        <div className='basurero'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                            </svg>
                                        </div>
                                    </button>
                                </>
                            </li>
                        ))}
                    </ul>

                    <h2 style={{ textAlign:'center', borderTop:'1px solid black', paddingTop:'8px', marginTop:'20px' }}>Subtotal: ${subtotal.toFixed(2)}</h2>

                    <div className='botones-control-carrito'>
                        <button className='boton-vaciar-carrito' onClick={limpiarCarrito}>Vaciar carrito</button>
                        <button className='boton-volver-menu' onClick={() => navigate('/')}>Volver al menú principal</button>
                        <button className='boton-confirmar-compra' onClick={() => navigate('/checkout')}>Confirmar compra</button>
                    </div>
                </div>
            ) : (
                <div>
                    <p className='mensaje-carrito-vacio'>carrito vacío</p>
                    <img className='imagen-carrito-vacio' src="./src/assets/empty-cart.png" alt="Imagen carrito vacio" />
                    <button className='button-carrito-volver' onClick={() => navigate('/')}>Volver al menú principal</button>
                </div>
            )}
        </div>
    );
};

export default Cart;
