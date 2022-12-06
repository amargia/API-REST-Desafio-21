import { Router } from 'express';
const router = Router();

// Import all routers;
import product from './productRouter.js';
import productList from './productListRouter.js';
import user from './userRouter.js';
import info from './infoRouter.js';
import home from './homeRouter.js';
import auth from './authRouter.js';

// Assign all routers to the app;
router.use('/productos', product);
router.use('/lista-productos', productList);
router.use('/user', user);
router.use('/info', info);
router.use('/', home);
router.use('/auth', auth);

export default router;