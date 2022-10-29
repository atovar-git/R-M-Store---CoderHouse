import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';
import { getProductsByCategoryDB } from '../../utils/firebase';
import { useParams } from 'react-router-dom';      // Hook para poder CAPTURAR el parámetro de la URL.

const ItemListContainerByCategory = () => {

    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);

    const { id } = useParams();                    // Id debe ser el mismo que se definió en la ruta. Este es un ESTADO. RE-RENDERIZA al cambiar su valor.

    // Montaje. Llamada a la promesa única vez.
    useEffect(() => {
        getProductsByCategoryDB(id)                // Fetch a BBDD.
            .then(data => {
                setProducts(data);                 // Seteo estados y re-renderiza.
                setLoaded(true);
            })
            .then(() => console.log("Data ready"))

        return () => {                         // IMPORTANTE este en un cleanup. Me sirve para ejecutar una función antes de que se ejecute el siguiente useEffect. Depende del filtro de dependencias (en este caso ANTES cada ejecución del useEffect se corre el cleanup).
            setLoaded(false)
        }
    }, [id]);

    return (
        <>
            <main className='container my-3'>

                {loaded ?
                    <div>
                        {/* Para que renderice al mismo tiempo que los items */}
                        <h4 className='fw-normal mb-3'>{products[0].species}</h4>
                        {/* ItemList */}
                        <ItemList products={products} />
                    </div>
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

export default ItemListContainerByCategory;
