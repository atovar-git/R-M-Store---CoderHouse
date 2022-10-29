import { initializeApp } from "firebase/app";                                                                // Inicializamos Firebase.
import { collection, doc, addDoc, getFirestore, getDocs, getDoc, query, where } from "firebase/firestore";   // Módulos de Firebase a utilizar.

// Configuración Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBEH8rZhs4e_6pn379-1wte5ZafvKgjCN4",
    authDomain: "rym-store-b5dd0.firebaseapp.com",
    projectId: "rym-store-b5dd0",
    storageBucket: "rym-store-b5dd0.appspot.com",
    messagingSenderId: "721932675428",
    appId: "1:721932675428:web:963a847060e3828f6cb271"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
// Inicializa Firestore
const db = getFirestore(app);

// Primera carga desde JSON (para ejecutarla des-comentar desde el index.js)
const firstLoadDB = async () => {
    const response = await fetch('./json/products.json')
    const productsJSON = await response.json()
    productsJSON.forEach(async (item) => {
        try {
            let product = await addDoc(collection(db, "products"), {                    // Se le indica la colección (si no existe la crea).
                number: item.id,
                name: item.name,
                status: item.status,
                idSpecies: item.idSpecies,
                species: item.species,
                gender: item.gender,
                image: item.image,
                stock: item.stock,
                price: item.price
            });
            console.log("Doc escrito firstLoadDB: ", product.id);
        } catch (e) {
            console.error("Error escritura firstLoadDB: ", e);
        }
    })
}

const getProductsDB = async () => {
    try {
        const products = await getDocs(collection(db, "products"))
        const productsResult = products.docs.map(item => {      // Importante: para destructuring usar {return ...} parece que no entiende sino.
            return { id: item.id, ...item.data() }
        })
        console.log("Lectura getProductsDB: ", JSON.stringify(productsResult, 0, 4));
        return productsResult
    } catch (e) {
        console.error("Error lectura getProductsDB: ", e);
    }
}

const getProductsByCategoryDB = async (id) => {
    try {
        const q = query(collection(db, "products"), where("idSpecies", "==", parseInt(id)));    // Recibe string y DEBO pasarlo a int.
        const products = await getDocs(q);
        const productsResult = products.docs.map(item => {      // Importante: para destructuring usar {return ...} parece que no entiende sino.
            return { id: item.id, ...item.data() }
        })
        console.log("Lectura getProductsByCategoryDB: ", JSON.stringify(productsResult, 0, 4));
        return productsResult
    } catch (e) {
        console.error("Error lectura getProductsByCategoryDB: ", e);
    }
}

const getProductDB = async (id) => {
    try {
        const product = await getDoc(doc(db, "products", id))
        const productResult = { id: product.id, ...product.data() }
        console.log("Lectura getProduct: ", JSON.stringify(productResult, 0, 4))
        return productResult
    } catch (e) {
        console.error("Error lectura getProduct: ", e);
    }
}

const createPurchaseOrder = async (formValues, total) => {
    try {
        const purchaseOrder = await addDoc(collection(db, "purchaseOrders"), {
            ...formValues,
            total
        })
        console.log("Doc escrito purchaseOrder: ", purchaseOrder.id);
        return purchaseOrder.id
    } catch (e) {
        console.error("Error escritura purchaseOrder: ", e);
    }
}

const createMessage = async (formValues) => {
    try {
        const message = await addDoc(collection(db, "messages"), {
            ...formValues
        })
        console.log("Doc escrito message: ", message.id);
        return message.id
    } catch (e) {
        console.error("Error escritura message: ", e);
    }
}

// Para testear funciones des-comentar de aquí e indexedDB.js
// firstLoadDB();                // COMENTAR después de la primera carga/renderización.
// getProductsDB();
// getProductsByCategoryDB(3);
// getProduct('CRRqH5qXmQ74fqUEOCrm')

export { firstLoadDB, getProductsDB, getProductsByCategoryDB, getProductDB, createPurchaseOrder, createMessage }
