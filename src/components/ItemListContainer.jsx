import React, { useEffect } from 'react';
import ItemList from './ItemList';
import { useAppContext } from './Context';
import Loader from './Loader';


export function ItemListContainer ({}) {

    const { cargarData, productos } = useAppContext();

    useEffect(() => {
        cargarData();
    }, []);


    return (

        <>
            {
                productos.length === 0 ?
                    <Loader />
                    :
                    <>
                        <h1 className='titulo-productos'>Nuestros productos</h1>
                        <ItemList productos={productos} />
                    </>
            }
        </>
    )
}
