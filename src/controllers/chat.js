import { list, save } from '../services/chat.js';
import '../connection/connection.js';

const getChat = async () => {
    const mensajes = await list();
    console.log(mensajes);
    return mensajes;
}

const sendMessage = async (message) => {
    const newMessage = await save(message);
    console.log(newMessage);
    return newMessage;
}

export { getChat, sendMessage };