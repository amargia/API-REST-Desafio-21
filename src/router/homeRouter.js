import auth from '../middlewares/auth.js';
import { Router } from 'express';
import { getHome } from '../controllers/home.js';

const home = Router();

home.get('/', auth, getHome);

export default home;