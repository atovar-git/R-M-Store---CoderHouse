import React from 'react';
import { Link } from 'react-router-dom';        // Para acceder a las rutas.


const Landing = () => {
    return (
        <>
            <main className='landing flex-grow-1 d-flex flex-column h-100'> {/*flex-grow-1 de esa forma la cita queda siempre abajo*/}

                <div className="flex-grow-1 d-flex flex-column justify-content-center">

                    <div className="mt-3 text-center">
                        <h1 className="display-1">R&M Store</h1>
                        <p className="lead fs-1">Colecciona las figuritas de la serie Rick y Morty</p>
                        <Link to="/item-list" className="btn btn-primary rounded-5 m-auto mt-3">Ir a la tienda</Link>
                    </div>

                    <div className="features col-10 col-sm-8 col-md-10 mx-auto d-md-flex justify-content-center algin-items-center mt-2 mt-lg-4">

                        <div className="card col col-md-3 col-xl-3 col-xxl-2 m-2">
                            <div className="card-body">
                                <i className="fa-regular fa-circle-check d-block text-center feature-icons mb-3"></i>
                                <h4 className="text-center lead">Excelente calidad</h4>
                            </div>
                        </div>

                        <div className="card col col-md-3 col-xl-3 col-xxl-2 m-2">
                            <div className="card-body">
                                <i className="fa-regular fa-credit-card d-block text-center feature-icons mb-3"></i>
                                <h4 className="text-center lead">Varios métodos de pago</h4>
                            </div>
                        </div>

                        <div className="card col col-md-3 col-xl-3 col-xxl-2 m-2">
                            <div className="card-body">
                                <i className="fa-solid fa-truck-fast d-block text-center feature-icons mb-3"></i>
                                <h4 className="text-center lead">Envíos a todo el país</h4>
                            </div>
                        </div>

                    </div>

                </div>

                <figure className="text-end me-2 mb-0 mt-auto">
                    <blockquote className="blockquote">
                        <p className='fs-6'>Las bodas son básicamente funerales con un pastel.</p>
                    </blockquote>
                    <figcaption className="blockquote-footer">
                        Rick en <cite title="Source Title">Rick and Morty</cite>
                    </figcaption>
                </figure>

            </main>
        </>
    );
}

export default Landing;
