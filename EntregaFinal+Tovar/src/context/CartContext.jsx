import React, { useState } from 'react';
import { createContext } from 'react';                                // Me permite crear el contexto.

const CartContext = createContext()                                   // Creamos un CONTEXTO.

const CartProvider = (props) => {                                     // Este provider "es como un componente padre" el cual provee un ESTADO y una FUNCION para que los componentes puedan modificarlo.

    // Estado (contendrá los productos agregados al carrito por los diferentes componentes).
    const [cart, setCart] = useState([]);                             // Necesitamos un estado que será usado/modificado por los componentes.

    // Funciones (modificarán el estado. Los argumentos que reciben SE LO PASARAN LOS HIJOS).
    const addProductCart = (productId, amount, cb = null) => {
        const aux = cart;                                             // Guardamos el carrito en un variable temporal.

        const index = aux.findIndex(item => item.id == productId)     // Si YA existe o no. findIndex permite pasar un callback particular.

        if (index != -1) {                                            // Si YA existe cambio la cantidad.
            aux[index].amount = amount
        } else {                                                      // Si NO existe lo agrego.
            const newCartItem = { id: productId, amount }             // Solo inserto un objeto (amount solo es igual a amount: amount ES6).
            aux.push(newCartItem)
        }
        setCart([...aux])                                             // IMPORTANTE: esta es la forma de modificar un estado ARRAY. De otra forma no se modificaría, impidiendo la deseada re-renderización. Seteo el nuevo carrito.

        console.log("Cart context: ", JSON.stringify(cart, 0, 4));

        // Ejecuta el cb solo si lo pasan como argumento, opcional.
        if (cb) {
            console.log("pre-Toast-callback exec")
            cb();
            console.log("post-Toast-callback exec")
        }
    }

    const deleteProductCart = (productId) => {
        const aux = cart;                                             // Guardamos el carrito en un variable temporal.

        const index = aux.findIndex(item => item.id == productId)     // Si YA existe o no. findIndex permite pasar un callback particular.

        aux.splice(index, 1)                                          // Remueve el item del índice = index. (1 significa remover si no tiene un elemento o reemplazar si le pasamos un elemento). Lo hace IN PLACE.
        setCart([...aux])                                             // IMPORTANTE: esta es la forma de modificar un estado ARRAY. De otra forma no se modificaría, impidiendo la deseada re-renderización. Seteo el nuevo carrito.

        console.log("Cart context: ", JSON.stringify(aux, 0, 4));
    }

    const amountInCart = () => {
        return cart.reduce((acum, item) => acum = acum + item.amount, 0)
    }

    return (
        <>
            {/* Ofrece el estado y las funciones para modificarlo. Los componentes usarán dicha funcion. */}
            <CartContext.Provider value={{ cart, addProductCart, deleteProductCart, amountInCart }}>
                {props.children}
            </CartContext.Provider>
        </>
    );
}

export { CartContext, CartProvider };
