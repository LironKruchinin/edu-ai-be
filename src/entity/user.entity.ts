import { Document, Schema } from 'mongoose'

export const UserSchema = new Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    phone_number: { type: String, required: true },
    salt: { type: String, required: true },
    created_at: { type: Number, required: true },
    updated_at: { type: Number },
    roles: { type: [String], default: ['basic'] }
})

export interface User extends Document {
    email: string;
    password: string;
    first_name: string;
    last_name: string;
    phone_number: string;
    created_at: number;
    updated_at: number;
    salt: string;
    roles: [string];
}