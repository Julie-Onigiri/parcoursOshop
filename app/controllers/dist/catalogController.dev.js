"use strict";

var _require = require('../models'),
    Category = _require.Category,
    Product = _require.Product;

var catalogController = {
  index: function index(req, res) {
    return regeneratorRuntime.async(function index$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            res.render('index');

          case 1:
          case "end":
            return _context.stop();
        }
      }
    });
  },
  productsList: function productsList(req, res) {
    var products, categories;
    return regeneratorRuntime.async(function productsList$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return regeneratorRuntime.awrap(Product.findAll());

          case 3:
            products = _context2.sent;
            console.log(JSON.stringify(products, null, 2));
            _context2.next = 7;
            return regeneratorRuntime.awrap(Category.findAll());

          case 7:
            categories = _context2.sent;
            console.log(JSON.stringify(categories, null, 2));
            res.render('shop', {
              categories: categories,
              products: products
            });
            _context2.next = 16;
            break;

          case 12:
            _context2.prev = 12;
            _context2.t0 = _context2["catch"](0);
            console.log(_context2.t0);
            res.status(500).send('Server Error');

          case 16:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, [[0, 12]]);
  },
  //Le but est de retrouver l identifiant de ma route pour rechercher la bonne categorie cad req.params.id 
  category: function category(req, res) {
    var id, category;
    return regeneratorRuntime.async(function category$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            // on récupère l'id de la route paramétrée
            id = req.params.id; // on ajoute un include pour avoir accès à une propriété products sur l'objet category contenant les produits dans un tableau 

            _context3.next = 4;
            return regeneratorRuntime.awrap(Category.findByPk(id, {
              include: 'products'
            }));

          case 4:
            category = _context3.sent;
            res.render('category', {
              category: category
            });
            _context3.next = 12;
            break;

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](0);
            console.log(_context3.t0);
            res.status(500).send('Server Error');

          case 12:
          case "end":
            return _context3.stop();
        }
      }
    }, null, null, [[0, 8]]);
  },
  product: function product(req, res) {
    var productId, product;
    return regeneratorRuntime.async(function product$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            productId = parseInt(req.params.id);
            _context4.next = 4;
            return regeneratorRuntime.awrap(Product.findByPk(productId));

          case 4:
            product = _context4.sent;
            res.render('product', {
              product: product
            });
            _context4.next = 12;
            break;

          case 8:
            _context4.prev = 8;
            _context4.t0 = _context4["catch"](0);
            console.error(_context4.t0.message);
            res.status(500).render('500');

          case 12:
          case "end":
            return _context4.stop();
        }
      }
    }, null, null, [[0, 8]]);
  },
  cart: function cart(req, res) {
    res.render('cart');
  }
};
module.exports = catalogController;