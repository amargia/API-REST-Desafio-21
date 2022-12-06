import { productosDao } from "../contenedores/daos/index.js";

const getAllProducts = async () => {
    return await productosDao.list();
}

const getProduct = async (id) => {
    return await productosDao.getById(id);
}

const saveProduct = async (producto) => {
    return await productosDao.save(producto);
}

const updateProduct = async (id, producto) => {
    return await productosDao.changeById(id, producto)
}

const deleteProduct = async (id) => {
    return await productosDao.deleteById(id)
}

export { getAllProducts, getProduct, saveProduct, updateProduct, deleteProduct };