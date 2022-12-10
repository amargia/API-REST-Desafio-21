import { getAllProducts, getProduct, saveProduct, updateProduct, deleteProduct } from "../services/products.js";

const getProductsList = async (req, res) => {
    const products = await getAllProducts();
    
    res.status(200).send(products);
}

//get productsListById
const getProductsListById = async (req, res) => {
    const id = req.params.id;
    const product = await getProduct(id);

    res.status(200).send(product);
}

//post productsList
const postProductsList = async (req, res) => {
    const {name, description, code, price, thumbnail, stock, timestamp} = req.body;
    const newProduct = await saveProduct({name, description, code, price, thumbnail, stock, timestamp});

    res.status(201).send(newProduct);
}

//update productsList
const updateProductsList = async (req, res) => {
    const id = req.params.id;
    const {name, description, code, price, thumbnail, stock} = req.body;
    const updatedProduct = await updateProduct(id, {name, description, code, price, thumbnail, stock});

    res.status(200).send(updatedProduct);
}

//delete productsList
const deleteProductsList = async (req, res) => {
    const id = req.params.id;
    const deletedProduct = await deleteProduct(id);

    res.status(200).send(deletedProduct);
}

export { getProductsList, getProductsListById, postProductsList, updateProductsList, deleteProductsList };