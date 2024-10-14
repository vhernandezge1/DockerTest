"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = exports.getAllUsers = void 0;
const user_model_1 = require("./user.model");
// Fonction pour récupérer tous les utilisateurs
const getAllUsers = async (req, res) => {
    try {
        const users = await user_model_1.UserModel.find();
        res.json(users);
    }
    catch (error) {
        res.status(500).json({ message: 'Erreur lors de la récupération des utilisateurs' });
    }
};
exports.getAllUsers = getAllUsers;
// Fonction pour créer un nouvel utilisateur
const createUser = async (req, res) => {
    try {
        const newUser = new user_model_1.UserModel(req.body);
        await newUser.save();
        res.status(201).json(newUser);
    }
    catch (error) {
        res.status(500).json({ message: 'Erreur lors de la création de l\'utilisateur' });
    }
};
exports.createUser = createUser;
// Autres méthodes similaires pour update/delete etc...
