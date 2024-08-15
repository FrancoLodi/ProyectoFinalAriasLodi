import React from 'react';
import Item from './Item';

const ItemList = ({ productos }) => {
    return (
        <div className="lista-items">
            {
                productos.map((el) => {
                    return (
                        <Item key={el.id} id={el.id} name={el.name} price={el.price} img={el.img} category={el.category} cantidad={el.cantidad}/>
                    )
                })
            }
        </div>
    );
};

export default ItemList;