// Este es el entry point de la aplicación. Importante ver que obtiene el id=root del index.html.

import React from 'react';                                          // Nos permite crear componentes
import ReactDOM from 'react-dom/client';
import './index.css';                                               // Importamos su css. Ojo que estos css afectan a toda la página (igualmente los css de los componentes internos tienen más jerarquía).
import App from './App';                                            // IMPORTANTE, este es el COMPONENTE llamado App.

const root = ReactDOM.createRoot(document.getElementById('root'));  // El id=root del HTML.
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);