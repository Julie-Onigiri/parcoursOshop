# Oshop
Oshop, un projet développé dans le cadre de ma formation chez O'Clock.

## Objectifs

- Travailler dans un projet existant, en suivant des directives, et s'intégrer dans un environnement professionnel :
  - S'orienter dans un code source avec une architecture non choisie et s'adapter à un nouvel environnement technique.
- **Création de base de données** (en utilisant un script déjà fourni) :
  - Utilisation de **Sequelize** :
    - **Création de modèles** (pour représenter les tables)
    - **Gestion des associations** entre les différentes tables
    - **Réalisation de requêtes**
- Gestion des sessions avec **express-session**
- Maîtrise des syntaxes spécifiques d'**ejs** pour les vues dynamiques

## Architecture donnée

```bash
.
├── README.md
├── app
│   ├── controllers
│   │   ├── adminController.js
│   │   ├── cartController.js
│   │   ├── catalogController.js
│   │   ├── sessionController.js
│   │   └── userController.js
│   ├── database.js
│   ├── models
│   │   ├── Category.js
│   │   ├── Product.js
│   │   ├── Role.js
│   │   ├── User.js
│   │   └── index.js
│   ├── routers.js
│   └── views
│       ├── 401.ejs
│       ├── admin.ejs
│       ├── cart.ejs
│       ├── category.ejs
│       ├── dashboard
│       │   ├── dashboard.ejs
│       │   └── partials
│       │       ├── head.ejs
│       │       ├── header.ejs
│       │       ├── quickActions.ejs
│       │       └── sidebar.ejs
│       ├── error.ejs
│       ├── index.ejs
│       ├── login.ejs
│       ├── partials
│       │   ├── foot.ejs
│       │   ├── head.ejs
│       │   ├── header.ejs
│       │   ├── nav.ejs
│       │   └── navlinks.ejs
│       ├── product.ejs
│       ├── register.ejs
│       └── shop.ejs
├── assets
│   ├── css
│   │   ├── app.css
│   │   └── dashboard.css
│   ├── favicon.ico
│   └── img
│       ├── 404.gif
│       ├── blog1.png
│       ├── blog2.png
│       ├── blog3.png
│       ├── kenshiro.jpg
│       ├── macbook-pro-laravel.png
│       ├── macbook-pro.png
│       └── triangles.svg
├── data
│   └── structure-data.sql
├── index.js
├── middlewares
│   ├── auth.js
│   ├── cartCalculations.js
│   ├── errorHandlers.js
│   ├── initCart.js
│   ├── isAdmin.js
│   └── loadUserToLocals.js
├── package-lock.json
├── package.json
└── utils
    └── helpers.js
```







