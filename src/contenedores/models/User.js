import { Schema, model } from 'mongoose';

const userSchema = new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    edad: { type: Number, required: true },
    telefono: { type: String, required: true },
    image: { type: String, required: true },
    direccion: { type: String, required: true },
});

export const User = model('User', userSchema);