import React from "react"
import { Navbar } from "./components/Navbar.jsx"
import { ItemListContainer } from "./components/ItemListContainer.jsx"
import { ItemDetailContainer } from "./components/ItemDetailContainer.jsx"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"

const products = [
    { 
        id: 1, 
        name: 'Remera 1', 
        category: 'Remeras',
        price: '1500',
        img: 'src/assets/top1.jpg'
    },
    { 
        id: 2, 
        name: 'Remera 2', 
        category: 'Remeras',
        price: '1200',
        img: 'src/assets/top2.jpg' 
    },
    { 
        id: 3, 
        name: 'Remera 3', 
        category: 'Remeras',
        price: '2000',
        img: 'src/assets/top3.jpg' 
    },
    { 
        id: 4, 
        name: 'Pantalon 1', 
        category: 'Pantalones',
        price: '2000',
        img: 'src/assets/bot1.jpg' 
    },
    { 
        id: 5, 
        name: 'Pantalon 2', 
        category: 'Pantalones',
        price: '2000',
        img: 'src/assets/bot2.jpg' 
    },
    { 
        id: 6, 
        name: 'Pantalon 3', 
        category: 'Pantalones',
        price: '1500',
        img: 'src/assets/bot3.jpg' 
    },
]


export function App () {
    return (
        <BrowserRouter>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path="/" element={<ItemListContainer products={products} />} />
                    <Route path="/lista" element={<ItemListContainer products={products} />} />
                    <Route path="/lista/:id" element={<ItemDetailContainer products={products} />} />
                    <Route path="*" element={<p>404 Not found</p>} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}