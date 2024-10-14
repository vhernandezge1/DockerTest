import { Request, Response } from 'express';
import { UserModel } from './user.model';

// Fonction pour récupérer tous les utilisateurs
export const getAllUsers = async (req: Request, res: Response) => {
    try {
        const users = await UserModel.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la récupération des utilisateurs' });
    }
};

// Fonction pour créer un nouvel utilisateur
export const createUser = async (req: Request, res: Response) => {
    try {
        const newUser = new UserModel(req.body);
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la création de l\'utilisateur' });
    }
};

// Autres méthodes similaires pour update/delete etc...
