import React from 'react';
import CartItem from './CartItem';

const Cart = () => {

    let cartListItem = [
        {
            "id": 118,
            "name": "Evil Morty",
            "price": 5,
            "amount": 5,
            "image": "https://rickandmortyapi.com/api/character/avatar/118.jpeg",
            "stock": 5
        },
        {
            "id": 21,
            "name": "Aqua Morty",
            "price": 10,
            "amount": 2,
            "image": "https://rickandmortyapi.com/api/character/avatar/21.jpeg",
            "stock": 15
        },
        {
            "id": 165,
            "name": "Investigator Rick",
            "price": 5,
            "amount": 4,
            "image": "https://rickandmortyapi.com/api/character/avatar/165.jpeg",
            "stock": 25
        }]

    //let cartListSubtotal = cartListItem.map(item => parseInt(item.price) * parseInt(item.amount)); // usamos cálculo interno.
    let total = '100 Harcoded' //cartListSubtotal.reduce((acc, currentValue) => acc + currentValue); // No se como recalcular el total porque tiene cálculos internos.

    return (
        <>
            <main className='container my-3'>

                <h4 className='fw-normal mb-3'>Carrito</h4>

                {cartListItem.length != 0 ?
                    <div>
                        <div className='container'>
                            {cartListItem.map((item, i) => <CartItem key={i} {...item} /*{subtotal={cartListSubtotal[i]}}*/ />)}
                        </div>
                        <h4 className='fw-normal mb-3 text-center'>Total: ${total}</h4>
                        
                        <div className='d-sm-flex justify-content-center'>
                            <button type="button" className="btn btn-primary   col-10 col-sm-3 col-lg-2 d-block m-auto mx-sm-1 mb-1">Comprar</button>
                            <button type="button" className="btn btn-secondary col-10 col-sm-3 col-lg-1 d-block m-auto mx-sm-1 mb-1">Limpiar</button>
                            <button type="button" className="btn btn-outline-light col-10 col-sm-3 col-lg-2 d-block m-auto mx-sm-1 mb-1 btn-seguir-comprando">Seguir comprando</button>
                        </div>
                    </div>
                    :
                    <div>
                        <h4 className='fw-normal mb-3 text-center'>Carrito vacío</h4>
                        <button type="button" className="btn btn-primary rounded-5 d-block m-auto mt-3">Ver productos</button>
                    </div>
                }

            </main>
        </>
    );
}

export default Cart;
