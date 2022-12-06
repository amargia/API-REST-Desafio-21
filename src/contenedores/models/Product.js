import { Schema, model } from 'mongoose';

const ProductSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    code: { type: Number, required: true },
    price: { type: Number, required: true, default: 0 },
    thumbnail: { type: String, required: true },
    stock: { type: Number, required: true, default: 0 },
    timestamp: { type: Number, required: true, default: 0 },
});

export const Product = model('Product', ProductSchema);