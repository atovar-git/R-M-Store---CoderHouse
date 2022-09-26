import React from 'react';

const CardDetail = () => {
    return (
        <>
            <main className='container my-3'>

                <h4 className='fw-normal mb-3'>Detalle del producto</h4>

                <div className="row g-0 col-12 col-lg-9 m-auto">

                    <div className="col-md-6">
                        <div className="p-1 card col-9 m-auto">
                            <img src="https://rickandmortyapi.com/api/character/avatar/118.jpeg" className="img-fluid rounded" />
                        </div>
                    </div>

                    <div className="col-md-6 mt-2 mt-md-0">
                        <div className="card wrapper-card-body col-9 col-md-12 col-lg-9 m-auto m-lg-0">
                            <div className="card-body">
                                <div className="card-header p-0 d-flex justify-content-between">
                                    <h5 className="card-title">Evil Morty</h5><p className="card-text"><small className="text-muted">#1234324</small></p>
                                </div>
                                <p className="card-text mt-2">Estado: Alive</p>
                                <p className="card-text mt-0">Tipo: Human</p>
                                <p className="card-text mt-0">Género: Male</p>
                                <p className="card-text mt-0">Precio:</p>
                                <h3 className='text-center mb-0'>$60</h3>
                                <p className="card-text mt-0">Cantidad:</p>
                                <div className='d-flex justify-content-center align-items-center'>
                                    <button type="button" className="btn btn-sm btn-outline-light"><i className="fa-solid fa-plus"></i></button>
                                    <span className="badge bg-primary rounded-pill mx-2 p-1">10</span>
                                    <button type="button" className="btn btn-sm btn-outline-light"><i className="fa-solid fa-minus"></i></button>
                                </div>
                                <button type="button" className="btn btn-primary mt-2 m-auto d-block col-12 col-md-9">Agregar al carrito</button>
                            </div>
                        </div>
                    </div>

                </div>
            </main>
        </>
    );
}

export default CardDetail;
