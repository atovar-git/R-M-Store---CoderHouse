import React from 'react';

const CartItem = (props) => {
    return (
        <>
            <div className="card mb-3 col-lg-7 m-auto cart-item">
                <div className="row g-0">
                    <div className="col-md-4 d-flex justify-content-center align-items-center p-2">
                        <div><img src={props.image} className="cart-item-img" /></div>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body p-2">
                            <div className="p-0 d-flex justify-content-between">
                                <h5 className="card-title">{props.name}</h5><p className="card-text"><small className="text-muted">#{props.id}</small></p>
                            </div>

                            <div className='d-flex justify-content-start align-items-center'>
                                <p className="card-tex mb-0 me-2">Cantidad:</p>
                                <button type="button" className="btn btn-sm btn-outline-light btn-plus-minus"><i className="fa-solid fa-plus"></i></button>
                                <span className="badge bg-primary rounded-pill mx-2 px-2  fs-6">{props.amount}</span>
                                <button type="button" className="btn btn-sm btn-outline-light btn-plus-minus"><i className="fa-solid fa-minus"></i></button>
                            </div>

                            <p className="card-text mb-0">Precio unitario: <span className='fw-bold'>${props.price}</span></p>
                            <p className="card-text mb-0">Subtotal: <span className='fw-bold'>${props.subtotal}</span></p>
                            <div className='d-flex'>
                                {/* <button type="button" className="btn btn-primary btn-sm ms-auto d-block" data-attributes={props.id} >Editar</button> */}
                                <button type="button" className="btn btn-primary btn-sm ms-auto d-block" data-attributes={props.id} >Eliminar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CartItem;
