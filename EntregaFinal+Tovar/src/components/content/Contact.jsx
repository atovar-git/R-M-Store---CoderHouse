import React from 'react';

const Contact = () => {
    return (
        <>
            <main className='container my-3'>

                <h4 className='fw-normal mb-3'>Contacto</h4>

                <div className="mt-3 text-center">
                    <h1 className="display-3">R&M Store</h1>
                    <h4 className='mt-3'>Alan Tovar</h4>
                    <h5 className='fw-normal'>Cel: 1122334455</h5>
                    <h5 className='fw-normal'>Email: rym@hotmail.com</h5>
                    <h4 className='mt-3'>Redes</h4>
                    <div className="text-center mt-3">
                        <a href="#"><i className="fa-brands fa-instagram fs-3 mx-2"></i></a>
                        <a href="#"><i className="fa-brands fa-facebook-f fs-3 mx-2"></i></a>
                        <a href="#"><i className="fa-brands fa-whatsapp fs-3 mx-2"></i></a>
                    </div>
                </div>
                
                <h4 className='fw-normal mt-5 text-center'>Dejanos tu mensaje o consulta</h4>

                <form className="p-2 col-lg-6 m-auto">

                    <div className="input-group mb-2">
                        <span className="input-group-text" id="basic-addon1">Nombre</span>
                        <input type="text" className="form-control" placeholder="Nombre"/>
                    </div>

                    <div className="input-group mb-2">
                        <span className="input-group-text" id="basic-addon1">Email</span>
                        <input type="text" className="form-control" placeholder="Email"/>
                    </div>

                    <div className="input-group mb-2">
                        <span className="input-group-text">Mensaje</span>
                        <textarea className="form-control" placeholder="Comentarios"></textarea>
                    </div>

                    <button id="submit" type="submit" className="btn btn-primary mt-3 d-block m-auto">Enviar</button>
                </form>

            </main>
        </>
    );
}

export default Contact;
