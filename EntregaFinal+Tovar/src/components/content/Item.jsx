import React from 'react';
import { Link } from 'react-router-dom';        // Para acceder a las rutas.

const Item = (props) => {
    return (
        <>
            <div className="cards-item col">
                <div className="card h-100 card-item">
                    <div><img className='card-img-top' src={props.image}/></div>
                    <div className="card-body">
                        <h5 className="card-title mb-0">{props.name}</h5>
                        <p className="card-text mb-0 text-muted text-end">#{props.number}</p>
                        <p className="card-text mb-0"><i className="fa-solid fa-caret-right me-2"></i>Estado: {props.status}</p>
                        <p className="card-text mb-0"><i className="fa-solid fa-caret-right me-2"></i>Tipo: {props.species}</p>
                    </div>
                    <div className='card-footer border-top-0 p-0'>
                        <div className="card-body pt-0">
                            <h4 className='text-end mb-0'>${props.price}</h4>
                        </div>
                        <Link to={`/item/${props.id}`} className="w-100 btn btn-sm btn-primary rounded-0 rounded-bottom">Ver más</Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Item;
