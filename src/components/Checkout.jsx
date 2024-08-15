import React, { useState } from 'react';
import { useAppContext } from './Context';
import { Link } from 'react-router-dom';
import './Checkout.css';

function Checkout() {
    const { crearOrden, carrito } = useAppContext();
    const [formData, setFormData] = useState({
        nombre: '',
        direccion: '',
        email: '',
        telefono: ''
    });
    const [compraConfirmada, setCompraConfirmada] = useState(false);
    const [orderId, setOrderId] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        crearOrden(formData, setCompraConfirmada, setOrderId);
    };

    const total = carrito.reduce((acc, item) => acc + item.price * (item.cantidad || 1), 0);

    return (
        <div className="checkout">
            {compraConfirmada ? (
                <div>
                    <h1 className='checkout-title'>Gracias por su compra</h1>
                    <p>Su orden ha sido confirmada con el ID: <strong>{orderId}</strong></p>
                    <Link to="/" className="boton-terminar-menu">Volver al menú principal</Link>
                </div>
            ) : (
                <div>
                    <h1 className='checkout-title'>Confirmar compra</h1>
                    <form onSubmit={handleSubmit} style={{width:'300px'}}>
                        <div className='form-style'>
                            <label>Nombre: </label>
                            <input
                                type="text"
                                name="nombre"
                                value={formData.nombre}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className='form-style'>
                            <label>Dirección: </label>
                            <input
                                type="text"
                                name="direccion"
                                value={formData.direccion}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className='form-style'>
                            <label>Email: </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className='form-style'>
                            <label>Teléfono: </label>
                            <input
                                type="tel"
                                name="telefono"
                                value={formData.telefono}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div>
                            <h3>Resumen de la compra</h3>
                            <ul>
                                {carrito.map((producto) => (
                                    <li key={producto.id} style={{ display: 'flex', gap: '10px' }}>
                                        <p>{producto.name}</p>
                                        <p>Cantidad: {producto.cantidad || 1}</p>
                                        <p>Precio: ${producto.price.toFixed(2)}</p>
                                    </li>
                                ))}
                            </ul>
                            <p style={{textAlign:'center', fontSize:'24px', fontWeight:'700'}}>Total a pagar: ${total.toFixed(2)}</p>
                        </div>

                        <button className='boton-terminar-compra' type="submit">Confirmar Compra</button>
                    </form>
                </div>
            )}
        </div>
    );
}

export default Checkout;
