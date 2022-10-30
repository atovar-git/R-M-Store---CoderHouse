import React from 'react';
import { Link } from 'react-router-dom';                              // Para acceder a las rutas.
import { useEffect } from 'react';                                    // Hook para poder manejar el ciclo de vida de los componentes. Montaje, actualización y desmontaje. Ejecuta la función interna cuando se MONTE el componente, ACTUALICE algún estado/prop o DESMONTE. IMPORTANTE: CADA CAMBIO DE ESTADO RE-RENDERIZA EL COMPONENTE (debido al useState) por lo que useEffect PUEDE EJECUTARSE (dependiendo de la configuración del filtro de dependencias).
import { useContext } from 'react';                                   // Hook para acceder a los ESTADOS y FUNCIONES del contexto.
import { CartContext } from '../../context/CartContext';              // Contexto el cual tiene sus estados y funciones.

const CartWidget = (props) => {

    // Uso el contexto (solo uso una función).
    const { amountInCart } = useContext(CartContext);

    // Ver que ejecuto la función amountInCart inmediatamente cuando se renderiza.
    return (
        <>
            {/* {console.log("Re-rendericé NAVBAR")} */}
            <Link to='/cart' className={`${props.style} text-decoration-none ms-lg-auto justify-content-center align-items-center`}>
                <i className="fa-solid fa-cart-shopping me-1 fs-5"></i>
                {/* <span>{props.value}</span> */}
                <span>{amountInCart() !== 0 && amountInCart()}</span>
            </Link>
        </>
    );
}

export default CartWidget;
