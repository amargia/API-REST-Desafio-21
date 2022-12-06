import { Schema, model } from 'mongoose';

const messageSchema = new Schema({
    mensaje: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    fecha: {
        type: String,
        required: true
    }
});

export const Message = model('Message', messageSchema);