import React from 'react';
import NavbarCart from './NavbarCart';

const Navbar = () => {

    let cartValue = 10;

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                {/* Container con un poco de padding */}
                <div className="container-fluid px-sm-2 px-md-4 align-items-center">

                    <a className="navbar-brand" href="#">R&M</a>

                    <div className="tools-wrapper d-flex">
                        {/* Carrito <lg */}
                        <NavbarCart style={'d-flex d-lg-none'} value={cartValue} />
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
                            <li className="nav-item">
                                <a className="nav-link active" href="#">Inicio</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle text-center" href="#" role="button" data-bs-toggle="dropdown">
                                    <span className="me-0">Cards</span>
                                </a>
                                <ul className="dropdown-menu bg-primary">
                                    <li><a className="dropdown-item small" href="#todas">Todas</a></li>
                                    <li><a className="dropdown-item small" href="#">Human</a></li>
                                    <li><a className="dropdown-item small" href="#">Alien</a></li>
                                </ul>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#">Contacto</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Acerca de</a>
                            </li>
                        </ul>

                        {/* Form >lg */}
                        <form className="d-none d-lg-flex mt-1 mt-lg-0">
                            <input className="form-control px-2 rounded-1 me-2" type="search" placeholder="Card..." />
                            <button className="btn btn-secondary" type="submit">Buscar</button>
                        </form>

                        {/* Carrito >lg */}
                        <NavbarCart style={'d-none d-lg-flex'} value={cartValue} />

                    </div>

                </div>
            </nav>
        </>
    );
}

export default Navbar;
