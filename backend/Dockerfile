# Utiliser une image Node.js
FROM node:18

# Définir le répertoire de travail
WORKDIR /usr/src/app

# Copier les fichiers package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste des fichiers
COPY . .

# Compiler TypeScript en JavaScript
RUN npm run build

# Exposer le port
EXPOSE 3000

# Lancer l'application
CMD ["npm", "start"]
