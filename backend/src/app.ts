import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './user.routes';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware pour parser le JSON
app.use(express.json());

// Connexion à MongoDB
mongoose.connect('mongodb://db:27017/your_database_name', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('MongoDB connection error:', err);
});

// Routes utilisateur
app.use('/api', userRoutes);

// Lancement du serveur
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
