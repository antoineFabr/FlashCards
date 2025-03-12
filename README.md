# FlashCards

FlashCards est une application web permettant de créer et gérer des cartes mémoire pour faciliter l'apprentissage.
![alt text](https://raw.githubusercontent.com/antoineFabr/FlashCards/refs/heads/main/img/2a4aa839-4d44-4a65-91c2-38911d4faf18.webp?raw=true)

## 1 Prérequis

Avant de commencer l'installation, assurez-vous d'avoir les logiciels suivants installés sur votre machine :

- Node.js (v18.16.0)
- npm (v9.5.1) ou Yarn (v1.22.19)
- Docker (v24.0.7)
- Git (v2.40.1)

## 2 déplacer vous dans le fichier flashcards du repo

## 3 renommer le fichier .env.example

```sh
mv .env.example .env

```

## 4 installer les dépendances

```sh
npm install

```

ou

```sh
yarn install

```

## 5 générer une clé

```sh
node ace generate:key

```

## 7 créer un conteneur Docker

```sh
docker compose up -d
```

## 8 créer la base de données

```sh
node ace migration:run

```

## 6 lancer le serveur

```sh
npm run dev

```

## 7 ouvrez un navigateur et allez à l'adresse :

```arduino
http://localhost:3333

```
