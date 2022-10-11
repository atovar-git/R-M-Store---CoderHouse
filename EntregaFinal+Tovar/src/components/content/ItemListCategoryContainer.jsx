import React, { useState, useEffect } from 'react';
import ItemCategory from './ItemCategory';
import { getSpeciesAPI } from '../../utils/getSpeciesAPI';
import { useParams } from 'react-router-dom';  // Hook para poder CAPTURAR el parámetro de la URL.

const ItemListCategoryContainer = () => {

    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);

    const { id } = useParams();                // Id debe ser el mismo que se definió en la ruta. Este es un ESTADO. RE-RENDERIZA al cambiar su valor.

    // Montaje. Llamada a la promesa única vez.
    useEffect(() => {
        getSpeciesAPI(id)                // Función ya contiene el fetch y .json().
            .then(data => { 
                setProducts(data);      // Seteo estados y re-renderiza.
                setLoaded(true);
            })
            .then(() => console.log("Data ready"))

            return () => {              // IMPORTANTE este en un cleanup. Me sirve para ejecutar una función antes de que se ejecute el siguiente useEffect. Depende del filtro de dependencias (en este caso ANTES cada ejecución del useEffect se corre el cleanup).
                setLoaded(false)
            }
    }, [id]);

    return (
        <>
            <main className='container my-3'>


                {loaded ?
                    <div>
                        {/* Para que renderice al mismo tiempo que los items. Solo selecciono un elemento para ver su categoría */}
                        <h4 className='fw-normal mb-3'>{products[0].species}s</h4>
                        
                        {/* ItemListContainer */}
                        <section className='row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 g-2 g-md-3'>
                            {products.map((item, i) => <ItemCategory key={i} {...item} />)}
                        </section>
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

export default ItemListCategoryContainer;
