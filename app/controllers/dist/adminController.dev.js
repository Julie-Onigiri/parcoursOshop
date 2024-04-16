"use strict";

var _require = require("../models"),
    User = _require.User;

var adminController = {
  index: function index(req, res) {
    var users;
    return regeneratorRuntime.async(function index$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return regeneratorRuntime.awrap(User.findAll());

          case 3:
            users = _context.sent;
            res.render('admin', {
              users: users
            });
            _context.next = 11;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            console.error(_context.t0.message);
            res.status(500).render('500');

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[0, 7]]);
  }
};
module.exports = adminController;