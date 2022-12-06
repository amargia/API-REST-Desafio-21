import { Router } from 'express';
import { getProductsList, getProductsListById, postProductsList, updateProductsList, deleteProductsList } from '../controllers/productsList.js';

const productsList = Router();

productsList.get('/', getProductsList);
productsList.get('/:id', getProductsListById);
productsList.post('/', postProductsList);
productsList.put('/:id', updateProductsList);
productsList.delete('/:id', deleteProductsList);

export default productsList;