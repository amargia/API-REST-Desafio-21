import ProductosDaoMemoria from "./productos/ProductosDaoMemoria.js";
import MensajesDaoMemoria from "./mensajes/MensajesDaoMemoria.js";
import UsuariosDaoMemoria from "./usuarios/UsuariosDaoMemoria.js";
import ProductosDaoArchivo from "./productos/ProductosDaoArchivo.js";
import MensajesDaoArchivo from "./mensajes/MensajesDaoArchivo.js";
import UsuariosDaoArchivo from "./usuarios/UsuariosDaoArchivo.js";
import ProductosDaoMongoDB from "./productos/ProductosDaoMongoDB.js";
import MensajesDaoMongoDB from "./mensajes/MensajesDaoMongoDB.js";
import UsuariosDaoMongoDB from "./usuarios/UsuariosDaoMongoDB.js";

import minimist from 'minimist';

const args = minimist(["-p", process.argv.slice(2)]);
const PERS = args.p[0];

import dotenv from "dotenv";
dotenv.config();

let productosDao;
let mensajesDao;
let usuariosDao;

switch (PERS) {
    case 'json':
        productosDao = new ProductosDaoArchivo();
        mensajesDao = new MensajesDaoArchivo();
        usuariosDao = new UsuariosDaoArchivo();
    break;
    case 'memoria':
        productosDao = new ProductosDaoMemoria();
        mensajesDao = new MensajesDaoMemoria();
        usuariosDao = new UsuariosDaoMemoria();
    break;
    case 'mongodb':
        productosDao = new ProductosDaoMongoDB();
        mensajesDao = new MensajesDaoMongoDB();
        usuariosDao = new UsuariosDaoMongoDB();
    break;
}

export { productosDao, mensajesDao, usuariosDao };