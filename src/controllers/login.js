import { logger } from "../logs/logger.js";

const getLogin = (req, res) => {
    res.render('login');
}

const postLogin = (req, res) => {
    logger.info("Inicio de sesión correcto");
    res.redirect('/');
}

export { getLogin, postLogin };