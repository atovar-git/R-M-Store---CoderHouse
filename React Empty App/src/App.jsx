// Este App.js es un COMPONENTE, puede tener su propio css y su lógica. En sí un COMPONENTE es una función que retorna un bloque de HTML. Tenemos componentes de CLASE y FUNCIONALES, cada uno tienes sus diferencias.
// Este App.js es RENDERIZADO por el index.js en donde es importado.

import React from 'react';                      // Nos permite crear componentes
import './App.css'                              // Importamos su css.

const App = () => {                             // El componente es una función (en este caso es componente FUNCIONAL)
    
    const saludo = 'Hello World';               // Antes del RETURN puedo escribir código JS.
    
    return (                                    // RETURN debe retornar UN SOLO bloque de código HTML: <>...</>. Esto es JSX: los class ahora son className, deben CERRARSE todas las etiquetas, se debe importar las imágenes para usarlas. LOS COMPONENTES importados se usan como si fueran etiquetas HTML. El código JS se realiza mediante {} (similar a EJS con <% %>).
        <>
            <h1 className='h1'>{saludo}</h1>
        </>
    );
}

export default App;

// PARECE ser como EJS, donde ahora se usa {} para códig/variables de JS, y además las particiones que hacíamos de las vistas para reutilizar bloques HTML ahora serían los componentes.
