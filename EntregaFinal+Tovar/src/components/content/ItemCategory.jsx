import React from 'react';
import { Link } from 'react-router-dom';        // Para acceder a las rutas.

const ItemCategory = (props) => {
    return (
        <>
            <div className="cards-item col">
                <div className="card h-100 card-item">
                    {/* La img cambia de path segun rutas */}
                    <div><img className='card-img-top' src={`../img/${props.image}`}/></div>
                    <div className="card-body">
                        <h5 className="card-title m">{props.name}</h5>
                        <p className="card-text">Estado: {props.status} / Tipo: {props.species}</p>
                    </div>
                    <div className='card-footer border-top-0 p-0'>
                        <div className="card-body pt-0">
                            <h4 className='text-end mb-0'>$60</h4>
                        </div>
                        <Link to={`/item/${props.id}`} className="w-100 btn btn-sm btn-primary rounded-0 rounded-bottom">Ver más</Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ItemCategory;
