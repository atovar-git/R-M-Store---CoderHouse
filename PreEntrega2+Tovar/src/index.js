// Este es el entry point de la aplicación. Importante ver que obtiene el id=root del index.html.

import React from 'react';                                          // Nos permite crear componentes.
import ReactDOM from 'react-dom/client';
import './styles/index.css';                                               // Importamos su CSS. Ojo que estos CSS afectan a toda la página (igualmente los CSS de los componentes internos tienen más jerarquía).
import App from './components/App';                                            // IMPORTANTE, este es el COMPONENTE llamado App.

const root = ReactDOM.createRoot(document.getElementById('root'));  // El id=root del HTML.
root.render(
    // <React.StrictMode>                                           // React.StrictMode hace que se renderice doble los componentes. El primero es como un test y el segundo es el render correcto. Lo eliminamos.
    <App />
    // </React.StrictMode>
);