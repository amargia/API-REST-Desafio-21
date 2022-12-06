import { Router } from 'express';
import { getLogin, postLogin } from '../controllers/login.js';
import { getLoginError } from '../controllers/loginError.js';
import { getLogout } from '../controllers/logout.js';
import { getRegister, postRegister } from '../controllers/register.js';

import { upload } from '../middlewares/multer.js';
const auth = Router();
import passport from '../middlewares/passport.js';

auth.get('/login', getLogin);
auth.post('/login', passport.authenticate('local', { failureRedirect: '/auth/loginError' }), postLogin);
auth.get('/loginError', getLoginError);
auth.get('/logout', getLogout);
auth.get('/register', getRegister);
auth.post('/register', upload.single('avatar'), postRegister);

export default auth;