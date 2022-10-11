import React, { useEffect, useState } from 'react';
import CartItem from './CartItem';
import { useContext } from 'react';                                   // Hook para acceder a los ESTADOS y FUNCIONES del contexto.
import { CartContext } from '../../context/CartContext';              // Contexto el cual tiene sus estados y funciones.
import { getProductsAPI } from '../../utils/getProductsAPI';
import { Link } from 'react-router-dom';                              // Para acceder a las rutas.


const Cart = () => {

    const [loaded, setLoaded] = useState(false);
    const [cartDetailList, setCartDetailList] = useState([]);
    // Almaceno el total. Es un estado porque necesito que se re-rednderice junto a los otros elemenetos. Si es un variable JS esta se calcula correctamente al renderizar por el useEffect se pierde su valor.
    const [total, setTotal] = useState(0);

    // Leo el contexto (productos en el carrito)
    const { cart } = useContext(CartContext);

    // Montaje + cada actualización de estado.
    useEffect(() => {
        getProductsAPI()                // Función ya contiene el fetch y .json().
            .then(data => {

                // Unimos el carrito con el detalle de productos.
                const cartJoinProducts = innerJoin(cart, data,
                    ({ id: uid, amount }, { id, name, status, idSpecies, species, gender, image, stock, price }) =>
                        id === uid && { id, name, status, idSpecies, species, gender, image, stock, price, amount });

                // Al resultado anterior le calculamos los subtotales.
                const cartWithSubtotal = cartJoinProducts.map(item => {
                    return {
                        ...item,
                        subTotal: (item.price * item.amount)
                    }
                });

                // Calculamos el total.
                const subTotalList = cartWithSubtotal.map(item => item.subTotal)
                const total = subTotalList.reduce((acc, currentValue) => acc + currentValue, 0); // El último parámetro es un valor inicial.

                setCartDetailList(cartWithSubtotal);      // Seteo estados y re-renderiza.
                setLoaded(true);
                setTotal(total);

            })
            .then(() => console.log("Data ready"))

        return () => {              // IMPORTANTE esta es un cleanup. Me sirve para ejecutar una función antes de que se ejecute el siguiente useEffect. Depende del filtro de dependencias (en este caso ANTES cada ejecución del useEffect se corre el cleanup).
            setLoaded(false)
        }
    }, [cart]);                     // OJO IMPORTANTE: usamos el cart DEL CONTEXTO para que cada cambio del contexto re-renderice esta página. Si lo odejamos [], solo se monta pero nunca más se actualiza, por lo que si borramos un eleento de cart este no será reflejado acá. Relación context <-> useEffect.

    // Función para unir el carrito con los detalles del producto. (De internet, podría ser poco performante porque hace un cartesian-join pero funciona).
    const innerJoin = (xs, ys, sel) =>
        xs.reduce((zs, x) =>
            ys.reduce((zs, y) =>            // cartesian product - all combinations
                zs.concat(sel(x, y) || []), // filter out the rows and columns you want
                zs), []);

    return (
        <>
            <main className='container my-3'>

                {loaded ?
                    <div>
                        {/* Para que renderice al mismo tiempo que los items */}
                        <h4 className='fw-normal mb-3'>Carrito</h4>
                        {cartDetailList.length != 0 ?
                            <div>
                                <div className='container'>
                                    {cartDetailList.map((item, i) => <CartItem key={i} {...item} />)}
                                </div>
                                <h4 className='fw-normal mb-3 text-center'>Total: ${total}</h4>
                                <div className='d-sm-flex justify-content-center'>
                                    <button type="button" className="btn btn-primary   col-10 col-sm-3 col-lg-2 d-block m-auto mx-sm-1 mb-1">Comprar</button>
                                    <button type="button" className="btn btn-secondary col-10 col-sm-3 col-lg-1 d-block m-auto mx-sm-1 mb-1">Limpiar</button>
                                    <button type="button" className="btn btn-outline-light col-10 col-sm-3 col-lg-2 d-block m-auto mx-sm-1 mb-1 btn-seguir-comprando">Seguir comprando</button>
                                </div>
                            </div>
                            :
                            <div className='text-center'>
                                <h4 className='fw-normal mb-3'>Carrito vacío</h4>
                                <Link to="/item-list" className="btn btn-primary rounded-5 m-auto">Ver productos</Link>
                            </div>
                        }
                    </div>
                    :
                    // Loader
                    <div className="loader-wrapper d-flex justify-content-center align-items-center mt-5">
                        <div className="loader"></div>
                    </div>
                }

            </main>
        </>
    );
}

export default Cart;
