import { getAllProducts, saveProduct } from '../services/products.js';
import { logger } from '../logs/logger.js';

const getProducts = async (req, res) => {
    const products = await getAllProducts();

    res.render('products', { products });
}

const postProduct = async (req, res) => {
    const { name, price, description, code, thumbnail, stock } = req.body;

    const product = { name, price, description, code, thumbnail, stock }

    try {
        await saveProduct(product);
        res.redirect('/');
    }
    catch (err) {
        logger.error(err);
    }
}

export { getProducts, postProduct };
