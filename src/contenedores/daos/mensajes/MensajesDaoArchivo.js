import ContenedorArchivo from "../../ContenedorArchivo.js";

const ruta = "../../../db/messages.json";

class MensajesDaoArchivo extends ContenedorArchivo {
    constructor() {
        super(ruta);
    }
}

export default MensajesDaoArchivo;