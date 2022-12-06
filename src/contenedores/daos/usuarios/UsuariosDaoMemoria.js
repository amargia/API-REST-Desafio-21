import ContenedorMemoria from "../../ContenedorMemoria.js";
import { usuarios } from "../../../db/memoria.js";
import bcrypt from "bcrypt";

class UsuariosDaoMemoria extends ContenedorMemoria {
    constructor() {
        super(usuarios);
    }
    
    async save(user) {
        try {
        const users = await this.list();
        const userExist = await users.find(user => user.email === user.email);
        if (userExist) {
            return false;
        } else {
            const hashpassword = await bcrypt.hash(user.password, 8)
            user.password = hashpassword;
            const data = await super.save(user);
            console.log(data);
            return data;
        }
        } catch (error) {
        console.log(error);
        }
    }

    async findByEmail(email) {
        try {
            const users = await this.list();
            const userExist = await users.find(user => user.email === email);
        if (userExist) {
            return userExist;
        } else {
            return false;
        }
        } catch (error) {
            console.log(error);
        }
    }
}

export default UsuariosDaoMemoria;