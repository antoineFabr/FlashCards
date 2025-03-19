# Utilisation d'une image Node.js
FROM node:18

# Définition du répertoire de travail
WORKDIR /flashcards

# Copier uniquement les fichiers package.json et package-lock.json pour optimiser le cache Docker
COPY ../flashcards/package*.json ./

# Installer les dépendances
RUN npm install

# Copier tout le contenu de l'application
COPY ../flashcards ./

#genere une clé
RUN node ace generate:key
# Exposer le port utilisé par l’application AdonisJS
EXPOSE 3333

# Lancer l'application
CMD ["npm", "run", "dev"]
