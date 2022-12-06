import { saveUser } from "../services/users.js";
import { logger } from "../logs/logger.js";
import { save } from "../utils/contenedor.js";

const getRegister = (req, res) => {
    res.render('register');
}

const postRegister = async (req, res) => {
    const file = req.file;
    const image = file.filename;

    const { username, edad, direccion, email, telefono, password } = req.body
    saveUser({username, edad, direccion, email, telefono, password, image})

    .then((user) => {
        if (!user) {
            return res.render('error', {error: 'Usuario existente'})
        }
        return res.render('sucess')
        })
        .catch((err) => {
            logger.error(err);
            res.render('error', {error: 'Error al guardar el usuario'})
        })
}

export { getRegister, postRegister };