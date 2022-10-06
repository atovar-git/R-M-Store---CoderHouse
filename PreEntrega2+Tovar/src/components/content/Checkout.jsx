import React from 'react';

const Checkout = () => {
    return (
        <>
            <main className='container my-3'>

                <h4 className='fw-normal mb-3'>Formulario de compra</h4>

                <h4 className='fw-normal text-center mb-2'>Complete sus datos</h4>

                <form className="p-2 col-lg-6 m-auto">

                    <div className="input-group mb-2">
                        <span className="input-group-text" id="basic-addon1">Nombre</span>
                        <input type="text" className="form-control" placeholder="Nombre" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-2">
                        <span className="input-group-text" id="basic-addon1">Apellido</span>
                        <input type="text" className="form-control" placeholder="Apellido" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>

                    <div className="input-group mb-2">
                        <span className="input-group-text" id="basic-addon1">Email</span>
                        <input type="text" className="form-control" placeholder="Email" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>

                    <div className="input-group mb-2">
                        <span className="input-group-text" id="basic-addon1">Documento</span>
                        <input type="text" className="form-control" placeholder="Documento" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>

                    <div className="input-group mb-2">
                        <span className="input-group-text" id="basic-addon1">Teléfono</span>
                        <input type="text" className="form-control" placeholder="Teléfono" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>

                    <div className="my-3">
                        <label className="me-2" htmlFor="gender">Género</label>

                        <input type="radio" className="btn-check" name="gender" id="male" required />
                        <label className="btn btn-sm btn-outline-light me-1" htmlFor="male">Masculino</label>

                        <input type="radio" className="btn-check" name="gender" id="female" required />
                        <label className="btn btn-sm btn-outline-light me-1" htmlFor="female">Femenino</label>

                        <input type="radio" className="btn-check" name="gender" id="secret" required />
                        <label className="btn btn-sm btn-outline-light me-1" htmlFor="secret">Otro</label>
                    </div>

                    <div className="form-check">
                        <label className="form-check-label" htmlFor="flexCheckChecked">Confirmo que los datos son correctos</label>
                        <input className="form-check-input" type="checkbox" id="flexCheckChecked" required />
                    </div>

                    <button id="submit" type="submit" className="btn btn-primary mt-3 d-block m-auto">Finalizar compra</button>
                </form>




                <div>
                    {/* Button trigger modal */}
                    {/* <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Launch demo modal
                    </button> */}
                    {/* Modal */}
                    <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                </div>
                                <div className="modal-body">
                                    Gracias por comprar en R&M
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary">Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



            </main>

        </>
    );
}

export default Checkout;
