import ContenedorMongoDB from "../../ContenedorMongoDB.js";
import { Message } from "../../models/Message.js";

class MessageDaoMongoDB extends ContenedorMongoDB {
  constructor() {
    super(Message);
  }
}

export default MessageDaoMongoDB;