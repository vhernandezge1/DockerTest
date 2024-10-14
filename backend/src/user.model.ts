import mongoose, { Schema, Document } from 'mongoose';

// Interface utilisateur
interface IUser extends Document {
    name: string;
    email: string;
    password: string;
}

// Schéma utilisateur
const userSchema: Schema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

// Modèle utilisateur
const UserModel = mongoose.model<IUser>('User', userSchema);

export { UserModel, IUser };
