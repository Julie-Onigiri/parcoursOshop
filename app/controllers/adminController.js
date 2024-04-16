const { User } = require("../models");

const adminController = {
    async index(req, res) {
        try {
            // Je recupere la liste des utilisateur
            const users = await User.findAll();
            res.render('admin', { users })
        } catch (error) {
            console.error(error.message);
            res.status(500).render('500');
        }
    }
}

module.exports = adminController;