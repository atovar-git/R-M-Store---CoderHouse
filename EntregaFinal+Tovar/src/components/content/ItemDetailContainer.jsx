import React from 'react';
import { useState } from 'react';              // Hook para poder darle estados a los componentes FUNCIONALES (no de clase). Como las variables de una función se destruyen una vez ejecutadas, con useState puedo guardar sus valores y reimprimirlos en cada re-renderización. Cada CAMBIO DE ESTADO PROVOCA UNA RE-RENDERIZACION. Si fuera una variable normal puedo cambiarle su valor pero no se mostraría. Necesito re-renderizar el componente para mostrarlo pero perdería su valor en cada re-renderizado. En cambio, con useState se renderiza el nuevo valor.
import { useEffect } from 'react';             // Hook para poder manejar el ciclo de vida de los componentes. Montaje, actualización y desmontaje. Ejecuta la función interna cuando se MONTE el componente, ACTUALICE algún estado/prop o DESMONTE. IMPORTANTE: CADA CAMBIO DE ESTADO RE-RENDERIZA EL COMPONENTE (debido al useState) por lo que useEffect PUEDE EJECUTARSE (dependiendo de la configuración del filtro de dependencias).
import { getProductAPI } from '../../utils/getProductAPI';
import { useParams } from 'react-router-dom';  // Hook para poder CAPTURAR el parámetro de la URL.
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {

    const [product, setProduct] = useState({});
    const [loaded, setLoaded] = useState(false);

    const { id } = useParams();                // Id debe ser el mismo que se definió en la ruta. Este es un ESTADO. RE-RENDERIZA al cambiar su valor.

    // Montaje. Llamada a la promesa única vez.
    useEffect(() => {
        getProductAPI(id)                      // Función ya contiene el fetch, .json() y find.
            .then(data => { 
                setProduct(data);              // Seteo estados y re-renderiza.
                setLoaded(true);
            })
            .then(() => console.log("Data ready"))
    }, []);

    // Ver que el evento es inline (camelCase) y llama a nuestra función.
    return (
        <>
            <main className='container my-3'>


                {loaded ?
                    <div>
                        {/* Para que renderice al mismo tiempo que los items */}
                        <h4 className='fw-normal mb-3'>Detalle del producto</h4>
                        {/* Item-detail */}
                        <ItemDetail product={product}/>
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

export default ItemDetailContainer;
