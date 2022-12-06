import { usuariosDao } from "../contenedores/daos/index.js";

const getAllUsers = async () => {
    return await usuariosDao.list();
}

const getUser = async (id) => {
    return await usuariosDao.getById(id);
}

const saveUser = async (usuario) => {
    return await usuariosDao.save(usuario);
}

const deleteUser = async (id) => {
    return await usuariosDao.deleteById(id)
}

export { getAllUsers, getUser, saveUser, deleteUser };