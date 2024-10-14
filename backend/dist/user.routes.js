"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_model_1 = require("./user.model");
const router = (0, express_1.Router)();
// Route pour récupérer tous les utilisateurs
router.get('/users', async (req, res) => {
    try {
        const users = await user_model_1.UserModel.find();
        res.json(users);
    }
    catch (error) {
        res.status(500).json({ message: 'Erreur lors de la récupération des utilisateurs' });
    }
});
// Route pour récupérer un utilisateur par ID
router.get('/users/:id', async (req, res) => {
    try {
        const user = await user_model_1.UserModel.findById(req.params.id);
        if (!user)
            return res.status(404).json({ message: 'Utilisateur non trouvé' });
        res.json(user);
    }
    catch (error) {
        res.status(500).json({ message: 'Erreur lors de la récupération de l\'utilisateur' });
    }
});
// Route pour créer un nouvel utilisateur
router.post('/users', async (req, res) => {
    try {
        const newUser = new user_model_1.UserModel(req.body);
        await newUser.save();
        res.status(201).json(newUser);
    }
    catch (error) {
        res.status(500).json({ message: 'Erreur lors de la création de l\'utilisateur' });
    }
});
// Route pour mettre à jour un utilisateur
router.put('/users/:id', async (req, res) => {
    try {
        const updatedUser = await user_model_1.UserModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedUser)
            return res.status(404).json({ message: 'Utilisateur non trouvé' });
        res.json(updatedUser);
    }
    catch (error) {
        res.status(500).json({ message: 'Erreur lors de la mise à jour de l\'utilisateur' });
    }
});
// Route pour supprimer un utilisateur
router.delete('/users/:id', async (req, res) => {
    try {
        const deletedUser = await user_model_1.UserModel.findByIdAndDelete(req.params.id);
        if (!deletedUser)
            return res.status(404).json({ message: 'Utilisateur non trouvé' });
        res.json({ message: 'Utilisateur supprimé avec succès' });
    }
    catch (error) {
        res.status(500).json({ message: 'Erreur lors de la suppression de l\'utilisateur' });
    }
});
exports.default = router;
