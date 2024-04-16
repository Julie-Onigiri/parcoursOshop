"use strict";

var bcrypt = require('bcrypt');

var emailValidator = require('email-validator');

var _require = require('../models'),
    User = _require.User,
    Role = _require.Role;

var userController = {
  index: function index(req, res) {
    res.render('register');
  },
  register: function register(req, res) {
    var hash, newUser;
    return regeneratorRuntime.async(function register$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;

            if (validator.isEmail(email)) {
              _context.next = 3;
              break;
            }

            throw new Error('Il y a un probleme dans le formattage de l\'email');

          case 3:
            if (!(password !== confirm)) {
              _context.next = 5;
              break;
            }

            throw new Error('Les deux password ne sont pas identiques');

          case 5:
            _context.next = 7;
            return regeneratorRuntime.awrap(bcrypt.hash(password, parseInt(process.env.SALT_ROUND) || 10));

          case 7:
            hash = _context.sent;
            _context.next = 10;
            return regeneratorRuntime.awrap(User.create({
              firstname: firstname,
              lastname: lastname,
              password: hash,
              email: email
            }));

          case 10:
            newUser = _context.sent;
            // !! ne pas modifier cette ligne
            res.render('login', {
              message: 'Vous pouvez maintenant vous connecter !'
            });
            _context.next = 18;
            break;

          case 14:
            _context.prev = 14;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);
            res.render('register', {
              error: _context.t0.message
            });

          case 18:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[0, 14]]);
  },
  show: function show(req, res) {
    return regeneratorRuntime.async(function show$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            res.render('dashboard/dashboard');

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    });
  }
};
module.exports = userController;