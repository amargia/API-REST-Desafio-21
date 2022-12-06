import ContenedorMongoDB from "../../ContenedorMongoDB.js";
import { User } from "../../models/User.js";
import bcrypt from "bcrypt";

class UsuariosDaoMongoDB extends ContenedorMongoDB {
    constructor() {
        super(User);
    }
    
    async save(user) {
        try {
          const userExist = await User.findOne({email: user.email});
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
            const userExist = await User.findOne({email: email});
            const todos = await User.find({});
            console.log(userExist);
        if (userExist) {
            return userExist;
        } else {
            return false;
        }
        } catch (error) {
            console.log(error);
        }
    }

    async findById(id) {
        try {
            const userExist = await User.findById(id);
            if (userExist) {
                return userExist;
            }
        } catch (error) {
            console.log(error);
        }
    }
}

export default UsuariosDaoMongoDB;