import { mensajesDao } from "../contenedores/daos/index.js";
import '../connection/connection.js';

const list = async () => {
    console.log('list');
    return await mensajesDao.list();
}

const save = async (mensaje) => {
    console.log(mensaje);
    return await mensajesDao.save(mensaje);
}

export { list, save };