const bcrypt = require('bcrypt');
const emailValidator = require('email-validator');
const { User, Role } = require('../models');

const userController = {
    index: (req, res) => {
        res.render('register');
    },

    register: async (req, res) => {
        try {
            // !! votre code à partir d'ici
            if (!validator.isEmail(email)) {
                throw new Error('Il y a un probleme dans le formattage de l\'email')
            }
            // verifier si password correspond à password confirm
            if (password !== confirm) {
                throw new Error('Les deux password ne sont pas identiques')
            }
            // hash password
            const hash = await bcrypt.hash(password, parseInt(process.env.SALT_ROUND) || 10)
            // attribuer un rôle ici, le role customer.

            // sauvegarder user
            const newUser = await User.create({
                firstname: firstname,
                lastname: lastname,
                password: hash,
                email: email
            })

            // !! ne pas modifier cette ligne
            res.render('login', {
                message: 'Vous pouvez maintenant vous connecter !',
            });
        } catch (error) {
            console.log(error);
            res.render('register', { error: error.message });
        }
    },

    show: async (req, res) => {
        res.render('dashboard/dashboard');
    },
};

module.exports = userController;
