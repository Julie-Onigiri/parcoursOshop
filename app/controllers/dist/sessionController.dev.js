"use strict";

var bcrypt = require('bcrypt');

var _require = require('../models'),
    User = _require.User,
    Role = _require.Role;

var sessionController = {
  index: function index(req, res) {
    res.render('login');
  },
  login: function login(req, res) {
    var _req$body, email, password, userFound, passwordMatched;

    return regeneratorRuntime.async(function login$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _req$body = req.body, email = _req$body.email, password = _req$body.password; // On vient chercher si un utilisateur correspond a l'email tape dans le formulaire

            _context.next = 4;
            return regeneratorRuntime.awrap(User.findOne({
              where: {
                email: email
              }
            }));

          case 4:
            userFound = _context.sent;

            if (userFound) {
              _context.next = 7;
              break;
            }

            throw new Error('La combinaison email/mot de passe est invalide');

          case 7:
            _context.next = 9;
            return regeneratorRuntime.awrap(bcrypt.compare(password, userFound.password));

          case 9:
            passwordMatched = _context.sent;

            if (passwordMatched) {
              _context.next = 12;
              break;
            }

            throw new Error('La combinaison email/mot de passe est invalide');

          case 12:
            // On sait que le couple id/pwd est valide
            // On connecte donc l'utilisateur
            req.session.userId = userFound.id; // On enlève le mot de passe de la session.
            // !! Ne pas modifier cette ligne

            res.redirect('/');
            _context.next = 20;
            break;

          case 16:
            _context.prev = 16;
            _context.t0 = _context["catch"](0);
            console.error(_context.t0.message);
            res.status(500).send('Server Error');

          case 20:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[0, 16]]);
  },
  logout: function logout(req, res) {
    req.session.destroy();
    res.redirect('/login');
  }
};
module.exports = sessionController;