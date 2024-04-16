const bcrypt = require('bcrypt');
const { User, Role } = require('../models');

const sessionController = {
    index: (req, res) => {
        res.render('login');
    },

    login: async (req, res) => {
        try {
            const { email, password } = req.body;
         

             // On vient chercher si un utilisateur correspond a l'email tape dans le formulaire
             const userFound = await User.findOne({
                where: {
                    email: email
                }
            })

            // Sequelize nous renvoi null si il ne trouve ou bien les infos du User trouve
            if (!userFound) {
                throw new Error('La combinaison email/mot de passe est invalide')
            }

            // Si jamais il y a bien un utilisateur avec cet email
            // Il faut verifier si le mot de passe correspond
            
            const passwordMatched = await bcrypt.compare(password, userFound.password);

            // Si les deux mots de passe ne sont pas egaux, message erreur
            if (!passwordMatched) {
                throw new Error('La combinaison email/mot de passe est invalide')
            }

            // On sait que le couple id/pwd est valide
            // On connecte donc l'utilisateur
            req.session.userId = userFound.id;

          

            // On enlève le mot de passe de la session.

            // !! Ne pas modifier cette ligne
            res.redirect('/');
        } catch (e) {
            console.error(e.message);
            res.status(500).send('Server Error');
        }
    },

    logout(req, res) {
        req.session.destroy();
        res.redirect('/login')
    }
};

module.exports = sessionController;
