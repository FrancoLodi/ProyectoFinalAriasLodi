import React from "react";
import { Navbar } from "./components/Navbar.jsx";
import { ItemListContainer } from "./components/ItemListContainer.jsx";
import { ItemDetailContainer } from "./components/ItemDetailContainer.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { ContextProvider } from './components/Context.jsx';
import Cart from './components/Cart.jsx';
import NotFound from './components/NotFound.jsx';
import Checkout from './components/Checkout.jsx';
import Contacto from './components/Contacto.jsx';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function App () {
    return (
        <ContextProvider>
            <BrowserRouter>
                <div className="App">
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<ItemListContainer />} />
                        <Route path="/lista" element={<ItemListContainer />} />
                        <Route path="/detalle/:id" element={<ItemDetailContainer />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/checkout" element={<Checkout />} />
                        <Route path="/contacto" element={<Contacto />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                    <ToastContainer />
                </div>
            </BrowserRouter>
        </ContextProvider>
    )
}