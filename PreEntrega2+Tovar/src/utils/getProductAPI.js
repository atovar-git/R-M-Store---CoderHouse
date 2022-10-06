// Creación de promesa (simulación demora de red)
export const getProductAPI = async (id) => {
    console.log("Getting data...")

    // Creación de promesa (simulación demora de red). Cuando accedamos a una API verdadera no hace falta la promesa, solo fetch.
    function fetchProducts() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(fetch('../json/products.json'));    // OJO CAMBIA CUANDO USO RUTAS (url params).
            }, 2000)
        })
    }

    const response = await fetchProducts();
    const productos = await response.json();
    const producto = productos.find(item => item.id == id);
    return producto;
}