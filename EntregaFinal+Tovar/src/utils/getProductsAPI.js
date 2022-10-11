// Creación de promesa (simulación demora de red)
export const getProductsAPI = async () => {
    console.log("Getting data...")

    // Creación de promesa (simulación demora de red). Cuando accedamos a una API verdadera no hace falta la promesa, solo fetch.
    function fetchProducts() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(fetch('./json/products.json'));     // OJO CAMBIA CUANDO USO RUTAS (url params).
            }, 2000)
        })
    }

    const response = await fetchProducts();
    const productos = await response.json();
    return productos;
}