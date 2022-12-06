import axios from "axios";

const getProducts = async () => {
    try {
        const response = await axios.get("http://localhost:8080/lista-productos");
        console.log("Productos:", response.data);
    } catch (error) {
        console.log(error);
    }
}

const getProductById = async (id) => {
    try {
        const response = await axios.get(`http://localhost:8080/lista-productos/${id}`);
        console.log("Producto:", response.data);
    } catch (error) {
        console.log(error);
    }
}

const addProduct = async (title, price, thumbnail) => {
    try {
        const response = await axios.post("http://localhost:8080/lista-productos", {
            title: title,
            price: price,
            thumbnail: thumbnail
        });
        console.log("Producto agregado:", response.data);
    } catch (error) {
        console.log(error);
    }
}

const updateProduct = async (id, title, price, thumbnail) => {
    try {
        const response = await axios.put(`http://localhost:8080/lista-productos/${id}`, {
            title: title,
            price: price,
            thumbnail: thumbnail
        });
        console.log("Producto actualizado:", response.data);
    } catch (error) {
        console.log(error);
    }
}

const deleteProduct = async (id) => {
    try {
        const response = await axios.delete(`http://localhost:8080/lista-productos/${id}`);
        console.log("Producto eliminado:", response.data);
    } catch (error) {
        console.log(error);
    }
}

getProducts();
// getProductById("638a74900a7ae8f00f8b1c1b");
// addProduct("test", 10, "test");
// updateProduct(638a74900a7ae8f00f8b1c1b, "test", 10, "test");
// deleteProduct(638a74900a7ae8f00f8b1c1b);

