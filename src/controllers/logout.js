import { getUser } from "../services/users.js";
import { logger } from "../logs/logger.js";

const getLogout = async (req, res) => {
    const user = await getUser(req.user._id);
    const name = user.username;

    logger.info(`El usuario ${name} ha cerrado sesión`);

    req.session.destroy((error) => {
        if (error) {
            logger.error(error);
        } else {
            res.render('logout', { name });
        }
    });
}

export { getLogout };