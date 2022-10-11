import React from 'react';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';        // Para acceder a las rutas. NavLink ES LO MISMO que Link solo que activa los estilos cuando la ruta actual matchea con esta ruta.

const Navbar = () => {

    const cartValue = 10;

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
                {/* Container con un poco de padding */}
                <div className="container-fluid px-sm-2 px-md-4 align-items-center">

                    <Link to='/' className="navbar-brand">R&M</Link>

                    <div className="tools-wrapper d-flex">
                        {/* Carrito <lg */}
                        <CartWidget style={'d-flex d-lg-none'} value={cartValue} />
                        {/* Toggler (navbar no expanded) */}
                        <button className="navbar-toggler ms-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02">
                            <span className="navbar-toggler-icon" />
                        </button>
                    </div>

                    {/* Lo que collapsa el toggler */}
                    <div className="collapse navbar-collapse" id="navbarColor02">

                        {/* Form <lg */}
                        <form className="d-flex d-lg-none mt-2 mt-lg-0 ">
                            <input className="form-control me-2" type="search" placeholder="Card..." />
                            <button className="btn btn-secondary" type="submit">Buscar</button>
                        </form>

                        <ul className="navbar-nav col-4 align-items-center m-auto m-lg-0">
                            <li className="nav-item me-xl-2">
                                <Link to="/item-list" className="nav-link">Inicio</Link>
                            </li>
                            <li className="nav-item dropdown me-xl-2">
                                <a className="nav-link dropdown-toggle text-center" href="#" role="button" data-bs-toggle="dropdown">
                                    <span className="me-0">Categorías</span>
                                </a>
                                <ul className="dropdown-menu bg-primary">
                                    <li><Link to='/item-list' className="dropdown-item small">Todas</Link></li>
                                    <li><Link to='/category/1' className="dropdown-item small">Human</Link></li>
                                    <li><Link to='/category/2' className="dropdown-item small">Humanoid</Link></li>
                                    <li><Link to='/category/3' className="dropdown-item small">Alien</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item me-xl-2">
                                <Link className="nav-link" to="/contact">Contacto</Link>
                            </li>
                        </ul>

                        {/* Form >lg */}
                        <form className="d-none d-lg-flex mt-1 mt-lg-0">
                            <input className="form-control px-2 rounded-1 me-2" type="search" placeholder="Card..." />
                            <button className="btn btn-secondary" type="submit">Buscar</button>
                        </form>

                        {/* Carrito >lg */}
                        <CartWidget style={'d-none d-lg-flex'} value={cartValue} />

                    </div>

                </div>
            </nav>
        </>
    );
}

export default Navbar;
