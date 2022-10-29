import React, { useEffect, useState } from 'react';
import { createMessage } from '../../utils/firebase';

const Contact = () => {

    const initialValues = { username: "", email: "", comment: "" };       // Objeto con valores iniciales para el useState.
    const [formValues, setFormValues] = useState(initialValues);                                // Almaceno el valor de los inputs.
    const [formErrors, setFormErrors] = useState({});                                           // Almaceno los errores al validar.
    const [isSubmit, setIsSubmit] = useState(false);
    const [messageLoading, setMessageLoading] = useState("form");

    useEffect(() => {
        // Si no hay errores submitea el form.
        if (Object.keys(formErrors).length === 0 && isSubmit) {       // isSubmit es como una llave para evitar la compra al primer-renderizado.
            generateMessage();
        }
    }, [formErrors]);

    // Guardo valor cuando cambie el input.
    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });  // Esto va a sobrescribir el valor del objeto inicial (name del input correspondiente + valor). Usamos [name] porque queremos que el contenido de name sea el nombre del atributo (sino el atributo se llamará name).  
    }

    // Cuando submiteo valido los valores de los inputs.
    const handleOnSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validateForm(formValues));          // Guardo en el objeto Errors el resultado de la validación.
        setIsSubmit(true);
    }

    // Función validadora.
    const validateForm = (values) => {
        const errors = {};                                      // Objeto donde guardo los errores.
        const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;  // Formato email.
        const onlyWordRegex = /^[a-zA-Z]+$/                     // Solo una palabra.

        if (!values.username) {
            errors.username = "* Nombre requerido"
        } else if (!onlyWordRegex.test(values.username)) {
            errors.username = "* Solo un nombre (letras)"
        }
        if (!values.email) {
            errors.email = "* Email requerido"
        } else if (!emailRegex.test(values.email)) {
            errors.email = "* Formato de email incorrecto"
        }
        if (!values.comment) {
            errors.comment = "* Mensaje vacío"
        }

        return errors;
    }

    const generateMessage = () => {
        setMessageLoading("loading");

        // Generamos la orden
        console.log("Generando mensaje...");
        createMessage(formValues)
            .then(() => {
                setMessageLoading("loaded");
            })
    }

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

                <h4 className='fw-normal mt-5 text-center'>Envíanos tu consulta</h4>

                {
                    (() => {
                        if (messageLoading == "form") {
                            return (
                                // Formulario
                                <form className="p-2 col-lg-6 m-auto" onSubmit={handleOnSubmit}>

                                    <div className="mb-2">
                                        <div className="input-group mb-1">
                                            <span className="input-group-text">Nombre</span>
                                            <input type="text" className="form-control" name="username" placeholder="Nombre" value={formValues.username} onChange={handleOnChange} />
                                        </div>
                                        <span className='text-warning d-block'>{formErrors.username}</span>
                                    </div>

                                    <div className="mb-2">
                                        <div className="input-group mb-1">
                                            <span className="input-group-text">Email</span>
                                            <input type="text" className="form-control" name="email" placeholder="Email" value={formValues.email} onChange={handleOnChange} />
                                        </div>
                                        <span className='text-warning d-block'>{formErrors.email}</span>
                                    </div>

                                    <div className="mb-2">
                                        <div className="input-group mb-1">
                                            <span className="input-group-text">Mensaje</span>
                                            <textarea className="form-control" name="comment" placeholder="Comentarios" value={formValues.comment} onChange={handleOnChange}></textarea>
                                        </div>
                                        <span className='text-warning d-block'>{formErrors.comment}</span>
                                    </div>

                                    <button id="submit" type="submit" className="btn btn-primary mt-3 d-block m-auto">Enviar</button>
                                </form>
                            )
                        } else if (messageLoading == "loading") {
                            return (
                                // Loader
                                <div className="loader-wrapper d-flex justify-content-center align-items-center my-5">
                                    <div className="loader"></div>
                                </div>
                            )
                        } else {
                            return (
                                // Respuesta
                                <p className='bg-primary text-center p-1 rounded col-lg-6 m-auto my-5'>Mensaje enviado!</p>
                            )
                        }
                    })()
                }

            </main>
        </>
    );
}

export default Contact;
