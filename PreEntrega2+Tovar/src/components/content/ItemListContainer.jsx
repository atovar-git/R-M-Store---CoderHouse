import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';
import { getProductsAPI } from '../../utils/getProductsAPI';

const ItemListContainer = () => {

    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);

    // Montaje. Llamada a la promesa única vez.
    useEffect(() => {
        getProductsAPI()                // Función ya contiene el fetch y .json().
            .then(data => { 
                setProducts(data);      // Seteo estados y re-renderiza.
                setLoaded(true);
            })
            .then(() => console.log("Data ready"))
    }, []);

    return (
        <>
            <main className='container my-3'>

                <h4 className='fw-normal mb-3'>Todas las Cards</h4>

                {loaded ?
                    // ItemList
                    <ItemList products={products}/>
                    :
                    // Loader
                    <div className="loader-wrapper d-flex justify-content-center align-items-center mt-5">
                        <div className="loader"></div>
                    </div>
                }
            </main>
        </>
    );
}

export default ItemListContainer;
