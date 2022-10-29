import React from 'react';
import { useState } from 'react';                                     // Hook para poder darle estados a los componentes FUNCIONALES (no de clase). Como las variables de una función se destruyen una vez ejecutadas, con useState puedo guardar sus valores y reimprimirlos en cada re-renderización. Cada CAMBIO DE ESTADO PROVOCA UNA RE-RENDERIZACION. Si fuera una variable normal puedo cambiarle su valor pero no se mostraría. Necesito re-renderizar el componente para mostrarlo pero perdería su valor en cada re-renderizado. En cambio, con useState se renderiza el nuevo valor.
import { useEffect } from 'react';                                    // Hook para poder manejar el ciclo de vida de los componentes. Montaje, actualización y desmontaje. Ejecuta la función interna cuando se MONTE el componente, ACTUALICE algún estado/prop o DESMONTE. IMPORTANTE: CADA CAMBIO DE ESTADO RE-RENDERIZA EL COMPONENTE (debido al useState) por lo que useEffect PUEDE EJECUTARSE (dependiendo de la configuración del filtro de dependencias).
import { useRef } from 'react';                                       // Hook para guardar valores pero su cambio de valor NO RE-RENDERIZARA el componente. Es como un state que no re-renderiza. Sirve también para acceder al DOM directamente (DOM REAL). 
import { useContext } from 'react';                                   // Hook para acceder a los ESTADOS y FUNCIONES del contexto.
import { CartContext } from '../../context/CartContext';              // Contexto el cual tiene sus estados y funciones.
import { Link } from 'react-router-dom';                              // Para acceder a las rutas.

const ItemDetail = (props) => {

    const [amount, setAmount] = useState(1);                          // Destruturing de array. [0] es la VARIABLE que guardará el estado (valor). [1] es una FUNCION que modificará dicho valor. DEBEMOS USAR CONST ya que modificamos el valor de dicha variable (su contenido (NO referencia), mediante la función). = useState(valor_inicial). DEBEMOS MODIFICAR UNICAMENTE EL VALOR MEDIANTE LA FUNCION INDICADA. CADA CAMBIO DE ESTADO PROVOCA UNA RE-RENDERIZACION.

    const stock = props.product.stock;                                // En la primera renderización (tiene el loader igual) será undefined pero cuando obtengo el producto se re-renderiza: asigna valor y renderiza este valor.

    const toastRef = useRef();                                        // Para acceder a DOM.

    // Leo el contexto.
    const { cart, addProductCart, deleteProductCart } = useContext(CartContext);

    // Callback para el padre(context).
    function toastShow() {
        console.log("Toast-callback executing")
        const toast = new window.bootstrap.Toast(toastRef.current);   // MUY IMPORTANTE VER QUE USAMOS WINDOW. Al añadir el CDN en el index.html este queda en el objeto window.
        toast.show();
    }

    // Contador (valida el stock).
    function counter(op) {

        // Borro la notificación si existe.
        const toast = new window.bootstrap.Toast(toastRef.current, { "animation": false });   // MUY IMPORTANTE VER QUE USAMOS WINDOW. Al añadir el CDN en el index.html este queda en el objeto window.
        toast.hide();

        // Cambio cantidades.
        if (op == "add") {
            if (amount < stock) {
                setAmount(amount + 1)
            }
        } else {
            if (amount > 1) {
                setAmount(amount - 1)
            }
        }
    }

    return (
        <>
            <div className="row g-0 col-12 col-lg-9 m-auto">

                {/* Imagen */}
                <div className="col-md-6">
                    <div className="p-1 card col-9 m-auto">
                        {/* Cuidado con la ruta de la imagen cambia cuando uso url params */}
                        <img src={props.product.image} className="img-fluid rounded" />
                    </div>
                </div>

                {/* Detalles */}
                <div className="col-md-6 mt-2 mt-md-0">
                    <div className="card wrapper-card-body col-9 col-md-12 col-lg-9 m-auto m-lg-0">
                        <div className="card-body">
                            <div className="card-header p-0 d-flex justify-content-between">
                                <h5 className="card-title">{props.product.name}</h5><p className="card-text"><small className="text-muted">#{props.product.number}</small></p>
                            </div>
                            <p className="card-text mt-2">Estado: {props.product.status}</p>
                            <p className="card-text mt-0">Tipo: {props.product.species}</p>
                            <p className="card-text mt-0">Género: {props.product.gender}</p>
                            <p className="card-text mt-0 mb-0">Precio:</p>
                            <h3 className='text-center mb-0'>${props.product.price}</h3>

                            {stock != 0 ?
                                <div>
                                    <p className="card-text mt-0 mb-0">Cantidad:</p>
                                    <div className='text-end mb-2 mb-lg-1'><span className="badge bg-light rounded-pill">Stock {props.product.stock}</span></div>
                                    <div className='d-flex justify-content-center align-items-center'>
                                        <button type="button" className="btn btn-sm btn-outline-light btn-plus-minus" onClick={() => counter("sub")}><i className="fa-solid fa-minus"></i></button>
                                        <span className="badge bg-primary rounded-pill mx-2 px-2 fs-6">{amount}</span>
                                        <button type="button" className="btn btn-sm btn-outline-light btn-plus-minus" onClick={() => counter("add")}><i className="fa-solid fa-plus"></i></button>
                                    </div>
                                    <button type="button" className="btn btn-primary mt-2 m-auto d-block col-12 col-md-9" onClick={() => addProductCart(props.product, amount, toastShow)}>Agregar al carrito</button>
                                    <div className="btn-group btn-group-sm d-flex mt-2 m-auto col-12 col-md-9">
                                        <Link to="/cart" type="button" className="btn btn-outline-light rounded-0 rounded-start me-1"><i className="fa-solid fa-cart-shopping"></i></Link>
                                        <Link to="/item-list" type="button" className="btn btn-outline-light rounded-0 rounded-end ms-1"><i className="fa-solid fa-shop"></i></Link>
                                    </div>
                                </div>
                                :
                                <button type="button" className="btn btn-primary mt-2 m-auto d-block col-12 col-md-9 disabled">Sin Stock</button>
                            }
                        </div>
                    </div>
                </div>

                {/* Toast */}
                <div className="toast-container position-fixed bottom-0 end-0 p-3">

                    <div ref={toastRef} className="toast align-items-center alert-success" role="alert" aria-live="assertive" aria-atomic="true">
                        <div className="d-flex">
                            <div className="toast-body d-flex align-items-center">
                                <i className="fa-regular fa-circle-check fs-4 mx-2"></i><span>{amount} {amount > 1 ? "productos agregados" : "producto agregado"} al carrito.</span>
                            </div>
                            <button type="button" className="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close" />
                        </div>
                    </div>

                </div>

            </div>
        </>
    );
}

export default ItemDetail;
