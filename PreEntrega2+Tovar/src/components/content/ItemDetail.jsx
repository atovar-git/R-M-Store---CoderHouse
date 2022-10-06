import React from 'react';
import { useState } from 'react';              // Hook para poder darle estados a los componentes FUNCIONALES (no de clase). Como las variables de una función se destruyen una vez ejecutadas, con useState puedo guardar sus valores y reimprimirlos en cada re-renderización. Cada CAMBIO DE ESTADO PROVOCA UNA RE-RENDERIZACION. Si fuera una variable normal puedo cambiarle su valor pero no se mostraría. Necesito re-renderizar el componente para mostrarlo pero perdería su valor en cada re-renderizado. En cambio, con useState se renderiza el nuevo valor.
import { useEffect } from 'react';             // Hook para poder manejar el ciclo de vida de los componentes. Montaje, actualización y desmontaje. Ejecuta la función interna cuando se MONTE el componente, ACTUALICE algún estado/prop o DESMONTE. IMPORTANTE: CADA CAMBIO DE ESTADO RE-RENDERIZA EL COMPONENTE (debido al useState) por lo que useEffect PUEDE EJECUTARSE (dependiendo de la configuración del filtro de dependencias).

const ItemDetail = (props) => {

    const [count, setCount] = useState(1);     // Destruturing de array. [0] es la VARIABLE que guardará el estado (valor). [1] es una FUNCION que modificará dicho valor. DEBEMOS USAR CONST ya que modificamos el valor de dicha variable (su contenido (NO referencia), mediante la función). = useState(valor_inicial). DEBEMOS MODIFICAR UNICAMENTE EL VALOR MEDIANTE LA FUNCION INDICADA. CADA CAMBIO DE ESTADO PROVOCA UNA RE-RENDERIZACION.
    
    const stock = props.product.stock;         // En la primera renderización (tiene el loader igual) será undefined pero cuando obtengo el producto se re-renderiza: asigna valor y renderiza este valor.

    function operation(op) {
        if (op == "add") {
            if (count < stock) {
                setCount(count + 1)
            }
        } else {
            if (count > 1) {
                setCount(count - 1)
            }
        }
    }

    return (
        <>
            <div className="row g-0 col-12 col-lg-9 m-auto">

                <div className="col-md-6">
                    <div className="p-1 card col-9 m-auto">
                        {/* Cuidado con la ruta de la imagen cambia cuando uso url params */}
                        <img src={`../img/${props.product.image}`} className="img-fluid rounded" />
                    </div>
                </div>

                <div className="col-md-6 mt-2 mt-md-0">
                    <div className="card wrapper-card-body col-9 col-md-12 col-lg-9 m-auto m-lg-0">
                        <div className="card-body">
                            <div className="card-header p-0 d-flex justify-content-between">
                                <h5 className="card-title">{props.product.name}</h5><p className="card-text"><small className="text-muted">#{props.product.id}</small></p>
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
                                        <button type="button" className="btn btn-sm btn-outline-light btn-plus-minus" onClick={() => operation("sub")}><i className="fa-solid fa-minus"></i></button>
                                        <span className="badge bg-primary rounded-pill mx-2 px-2 fs-6">{count}</span>
                                        <button type="button" className="btn btn-sm btn-outline-light btn-plus-minus" onClick={() => operation("add")}><i className="fa-solid fa-plus"></i></button>
                                    </div>
                                    <button type="button" className="btn btn-primary mt-2 m-auto d-block col-12 col-md-9">Agregar al carrito</button>
                                </div>
                                :
                                <button type="button" className="btn btn-primary mt-2 m-auto d-block col-12 col-md-9 disabled">Sin Stock</button>
                            }
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default ItemDetail;
