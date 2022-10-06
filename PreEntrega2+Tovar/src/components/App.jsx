// Este App.js es un COMPONENTE, puede tener su propio css y su lógica. En sí un COMPONENTE es una función que retorna un bloque de HTML. Tenemos componentes de CLASE y FUNCIONALES, cada uno tiene sus diferencias.
// Este App.js es RENDERIZADO por el index.js en donde es importado.

import React from 'react';                                      // Nos permite crear componentes.
import { BrowserRouter, Routes, Route } from 'react-router-dom' // Para el manejo de rutas.
import '../styles/App.css'                                      // Importamos su css.
import Navbar from './content/Navbar';                          // Importamos este COMPONENTE.
import Footer from './content/Footer';
import ItemListContainer from './content/ItemListContainer';
import Landing from './content/Landing';
import ItemDetailContainer from './content/ItemDetailContainer';
import Cart from './content/Cart';
import Checkout from './content/Checkout';
import ItemListCategoryContainer from './content/ItemListCategoryContainer';
import Contact from './content/Contact';

const App = () => {                                             // El componente es una función (en este caso es componente FUNCIONAL)

    const saludo = 'Hello World';                               // Antes del RETURN puedo escribir código JS.

    return (                                                    // RETURN debe retornar UN SOLO bloque de código HTML: <>...</>. Esto es JSX: los class ahora son className, deben CERRARSE todas las etiquetas, se debe importar las imágenes para usarlas. LOS COMPONENTES importados se usan como si fueran etiquetas HTML. El código JS se realiza mediante {} (similar a EJS con <% %>).
        <>

            <BrowserRouter>
                <div className="d-flex flex-column min-vh-100">

                    <Navbar />

                    <Routes>
                        <Route path="/" element={<Landing />} />
                        <Route path="/item-list" element={<ItemListContainer />} />
                        <Route path="/item/:id" element={<ItemDetailContainer />} />
                        <Route path="/category/:id" element={<ItemListCategoryContainer />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/checkout" element={<Checkout />} />
                        <Route path="/contact" element={<Contact />}/>
                    </Routes>

                    <Footer />

                </div>
            </BrowserRouter>

        </>
    );
}

export default App;

// PARECE ser como EJS, donde ahora se usa {} para código/variables de JS, y además las particiones que hacíamos de las vistas para reutilizar bloques HTML ahora serían los componentes.
