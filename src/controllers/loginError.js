import { logger } from "../logs/logger.js";

const getLoginError = (req, res) => {
    logger.error("Error al iniciar sesión");
    res.render('error', { error: 'Usuario o contraseña incorrectos' });
}

export { getLoginError };