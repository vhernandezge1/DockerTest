# Utilise une image de base Node.js avec une version appropriée
FROM node:18-alpine

# Définit le répertoire de travail dans le conteneur
WORKDIR /usr/src/app

# Copie les fichiers de dépendances dans le conteneur
COPY package*.json ./

# Installe les dépendances du projet
RUN npm install

# Copie tout le reste du projet dans le conteneur
COPY . .

# Compile les fichiers TypeScript
RUN npm run build

# Expose le port sur lequel l'application écoute
EXPOSE 3000

# Démarre l'application (en utilisant le fichier compilé dans dist)
CMD ["node", "dist/app.js"]
