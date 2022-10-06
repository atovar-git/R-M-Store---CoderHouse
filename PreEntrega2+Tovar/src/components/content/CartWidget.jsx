import React from 'react';
import { Link, NavLink } from 'react-router-dom';        // Para acceder a las rutas.


const CartWidget = (props) => {
    return (
        <>
            <Link to='/cart' className={`${props.style} text-decoration-none ms-lg-auto justify-content-center align-items-center`}>
                <i className="fa-solid fa-cart-shopping me-1 fs-5"></i>
                <span>{props.value}</span>
            </Link>
        </>
    );
}

export default CartWidget;
