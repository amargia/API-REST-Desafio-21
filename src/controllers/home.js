import { getUser } from '../services/users.js';

const getHome = async (req, res) => {
    const user = await getUser(req.user._id);

    const userData = {
        _id: user._id,
        username: user.username,
        email: user.email,
        telefono: user.telefono,
        direccion: user.direccion,
        edad: user.edad,
        image: user.image
    }

    res.render('home', { userData });
}

export { getHome };