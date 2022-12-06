import { getUser } from "../services/users.js";

const getUsuario = async (req, res) => {
    const userData = await getUser(req.user._id);
    res.render('user', { userData });
}

export { getUsuario };