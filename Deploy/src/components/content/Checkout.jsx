import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';                              // Para acceder a las rutas.
import { useContext } from 'react';                                   // Hook para acceder a los ESTADOS y FUNCIONES del contexto.
import { CartContext } from '../../context/CartContext';              // Contexto el cual tiene sus estados y funciones.
import { createPurchaseOrder } from '../../utils/firebase';

const Checkout = () => {

    const initialValues = { username: "", surname: "", document: "", email: "", tel: "", address: "", confirm: "" };       // Objeto con valores iniciales para el useState.
    const [formValues, setFormValues] = useState(initialValues);                                // Almaceno el valor de los inputs.
    const [formErrors, setFormErrors] = useState({});                                           // Almaceno los errores al validar.
    const [isSubmit, setIsSubmit] = useState(false);
    const [orderNumber, setOrderNumber] = useState();
    const [orderLoading, setOrderLoading] = useState("form");

    const modalRef = useRef();                                        // Para acceder a DOM.

    // Leo el contexto (productos en el carrito).
    const { cart, cleanCart } = useContext(CartContext);

    useEffect(() => {
        // Si no hay errores submitea el form.
        if (Object.keys(formErrors).length === 0 && isSubmit) {       // isSubmit es como una llave para evitar la compra al primer-renderizado.
            generateOrder();
        }
    }, [formErrors]);

    // Guardo valor cuando cambie el input.
    const handleOnChange = (e) => {
        const { name } = e.target;
        let value;

        if (e.target.name == "confirm") {                 // Solo para type=checkbox.
            value = e.target.checked
        } else {
            value = e.target.value                        // Para otros types.
        }

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
        const onlyNumbersRegex = /^\d+$/;                       // Solo números.
        const onlyWordRegex = /^[a-zA-Z]+$/                     // Solo una palabra.

        if (!values.username) {
            errors.username = "* Nombre requerido"
        } else if (!onlyWordRegex.test(values.username)) {
            errors.username = "* Solo un nombre (letras)"
        }
        if (!values.surname) {
            errors.surname = "* Apellido requerido"
        } else if (!onlyWordRegex.test(values.surname)) {
            errors.surname = "* Solo un apellido (letras)"
        }
        if (!values.document) {
            errors.document = "* Documento requerido"
        } else if (!onlyNumbersRegex.test(values.document)) {
            errors.document = "* Solo un números"
        }
        if (!values.email) {
            errors.email = "* Email requerido"
        } else if (!emailRegex.test(values.email)) {
            errors.email = "* Formato de email incorrecto"
        }
        if (!values.tel) {
            errors.tel = "* Teléfono requerido"
        } else if (!onlyNumbersRegex.test(values.tel)) {
            errors.tel = "* Solo números"
        }
        if (!values.address) {
            errors.address = "* Dirección requerida"
        }
        if (!values.confirm) {
            errors.confirm = "* Confirme que los datos son correctos"
        }

        return errors;
    }

    const generateOrder = () => {
        setOrderLoading("loading");

        const modal = new window.bootstrap.Modal(modalRef.current);
        //modal.show();

        // Calculamos los subtotales.
        const cartWithSubtotal = cart.map(item => {
            return {
                ...item,
                subTotal: (item.price * item.amount)
            }
        });

        // Calculamos el total.
        const subTotalList = cartWithSubtotal.map(item => item.subTotal)
        const total = subTotalList.reduce((acc, currentValue) => acc + currentValue, 0); // El último parámetro es un valor inicial.

        // Generamos la orden
        console.log("Generando orden...");
        createPurchaseOrder(formValues, total)
            .then(id => {
                setOrderNumber(id);
                setOrderLoading("loaded")
                modal.show();

                cleanCart();                                        // Limpio el carrito.
            })
    }

    const purchaseCompleted = () => {
        const modal = window.bootstrap.Modal.getOrCreateInstance(modalRef.current);
        modal.hide();
    }

    return (
        <>
            <main className='container my-3'>

                {/* Form */}
                {
                    (() => {
                        if (orderLoading == "form") {
                            return (
                                // Formulario
                                <div>
                                    <h4 className='fw-normal mb-3'>Check-out</h4>
                                    {cart.length != 0 ?
                                        <div>
                                            <h4 className='fw-normal text-center mb-2'>Complete sus datos para realizar la compra</h4>
                                            <form className="p-2 col-lg-6 m-auto" onSubmit={handleOnSubmit}>
                                                <div className='mb-2'>
                                                    <div className="input-group mb-1">
                                                        <span className="input-group-text">Nombre</span>
                                                        <input type="text" className="form-control" name="username" placeholder="Nombre" value={formValues.username} onChange={handleOnChange} />
                                                    </div>
                                                    <span className='text-warning d-block'>{formErrors.username}</span>
                                                </div>
                                                <div className="mb-2">
                                                    <div className="input-group mb-1">
                                                        <span className="input-group-text">Apellido</span>
                                                        <input type="text" className="form-control" name="surname" placeholder="Apellido" value={formValues.surname} onChange={handleOnChange} />
                                                    </div>
                                                    <span className='text-warning d-block'>{formErrors.surname}</span>
                                                </div>
                                                <div className="mb-2">
                                                    <div className="input-group mb-1">
                                                        <span className="input-group-text">Documento</span>
                                                        <input type="text" className="form-control" name="document" placeholder="Documento" value={formValues.document} onChange={handleOnChange} />
                                                    </div>
                                                    <span className='text-warning d-block'>{formErrors.document}</span>
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
                                                        <span className="input-group-text">Teléfono</span>
                                                        <input type="text" className="form-control" name="tel" placeholder="Teléfono" value={formValues.tel} onChange={handleOnChange} />
                                                    </div>
                                                    <span className='text-warning d-block'>{formErrors.tel}</span>
                                                </div>
                                                <div className="mb-2">
                                                    <div className="input-group mb-1">
                                                        <span className="input-group-text">Dirección de envío</span>
                                                        <input type="text" className="form-control" name="address" placeholder="Dirección" value={formValues.address} onChange={handleOnChange} />
                                                    </div>
                                                    <span className='text-warning d-block'>{formErrors.address}</span>
                                                </div>
                                                <div className="form-check">
                                                    <label className="form-check-label" htmlFor="checkbox">Confirmo que los datos son correctos</label>
                                                    <input className="form-check-input" type="checkbox" id="checkbox" name="confirm" onChange={handleOnChange} />
                                                </div>
                                                <span className='text-warning d-block'>{formErrors.confirm}</span>
                                                <button id="submit" type="submit" className="btn btn-primary mt-3 d-block m-auto">Finalizar compra</button>
                                            </form>
                                        </div>
                                        :
                                        <div className='text-center'>
                                            <h4 className='fw-normal mb-3'>Carrito vacío</h4>
                                            <Link to="/item-list" className="btn btn-primary rounded-5 m-auto">Ver productos</Link>
                                        </div>
                                    }
                                </div>
                            )
                        } else if (orderLoading == "loading") {
                            return (
                                // Loader
                                <div className="loader-wrapper d-flex justify-content-center align-items-center mt-5">
                                    <div className="loader"></div>
                                </div>
                            )
                        } else {
                            return (
                                // Vacío (mostraré el modal cuando termine la operación)
                                <div></div>
                            )
                        }
                    })()
                }

                {/* Modal */}
                <div ref={modalRef} className="modal fade" id="exampleModal" data-bs-backdrop="static">
                    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">

                        <div className="modal-content">

                            <div className="modal-header d-block">
                                <h5 className="modal-title text-center" id="exampleModalLabel">Gracias por su compra!</h5>
                            </div>

                            <div className="modal-body">
                                <div className="d-flex justify-content-center mb-3"><i className="fa-solid fa-truck-fast feature-icons"></i></div>
                                <p>Le avisaremos cuando el envío esté en camino!</p>
                                <p className='bg-primary text-center p-1 rounded mb-4'>Su orden es <span className='text-muted fw-bold ms-1'>#{orderNumber}</span></p>
                                <p>Cualquier consulta no dude en comunicarse.</p>
                                <p className='mb-0'>R&M</p>
                            </div>

                            <div className="modal-footer">
                                <Link to="/item-list" className="btn btn-secondary" onClick={purchaseCompleted}>Aceptar</Link>
                            </div>
                        </div>

                    </div>
                </div>

            </main>

        </>
    );
}

export default Checkout;
