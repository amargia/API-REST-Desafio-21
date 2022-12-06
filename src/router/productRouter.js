import { Router } from "express";
import { getProducts, postProduct } from "../controllers/products.js";

const product = Router();

product.get("/", getProducts);

product.post("/", postProduct);

export default product;