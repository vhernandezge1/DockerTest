import { Router, Request, Response } from 'express';
import { UserModel } from './user.model';

const router = Router();

// Route pour récupérer tous les utilisateurs
router.get('/users', async (req: Request, res: Response) => {
    try {
        const users = await UserModel.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la récupération des utilisateurs' });
    }
});

// Route pour récupérer un utilisateur par ID
router.get('/users/:id', async (req: Request<{ id: string }>, res: Response) => {
    try {
        const user = await UserModel.findById(req.params.id);
        if (!user) return res.status(404).json({ message: 'Utilisateur non trouvé' });
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la récupération de l\'utilisateur' });
    }
});

// Route pour créer un nouvel utilisateur
router.post('/users', async (req: Request, res: Response) => {
    try {
        const newUser = new UserModel(req.body);
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la création de l\'utilisateur' });
    }
});

// Route pour mettre à jour un utilisateur
router.put('/users/:id', async (req: Request<{ id: string }>, res: Response) => {
    try {
        const updatedUser = await UserModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedUser) return res.status(404).json({ message: 'Utilisateur non trouvé' });
        res.json(updatedUser);
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la mise à jour de l\'utilisateur' });
    }
});

// Route pour supprimer un utilisateur
router.delete('/users/:id', async (req: Request<{ id: string }>, res: Response) => {
    try {
        const deletedUser = await UserModel.findByIdAndDelete(req.params.id);
        if (!deletedUser) return res.status(404).json({ message: 'Utilisateur non trouvé' });
        res.json({ message: 'Utilisateur supprimé avec succès' });
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la suppression de l\'utilisateur' });
    }
});

export default router;
