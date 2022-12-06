import ContenedorMemoria from "../../ContenedorMemoria.js";
import { mensajes } from "../../../db/memoria.js";

class MensajesDaoMemoria extends ContenedorMemoria {
  constructor() {
    super(mensajes);
  }
}

export default MensajesDaoMemoria;