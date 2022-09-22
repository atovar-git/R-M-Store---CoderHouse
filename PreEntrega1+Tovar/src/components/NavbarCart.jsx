import React from 'react';

const NavbarCart = (props) => {
    return (
        <>
            <a className={`${props.style} text-decoration-none ms-lg-auto justify-content-center align-items-center`} href='#'>
                <i className="fa-solid fa-cart-shopping me-1 fs-5"></i>
                <span>{props.value}</span>
            </a>
        </>
    );
}

export default NavbarCart;
