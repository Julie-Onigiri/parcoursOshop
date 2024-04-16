"use strict";

var Product = require('../models/Product');

var cartController = {
  index: function index(req, res) {
    res.render('cart');
  },
  addOrUpdate: function addOrUpdate(req, res) {
    var productId, productsInCart, productToAdd, found;
    return regeneratorRuntime.async(function addOrUpdate$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            productId = parseInt(req.params.productId);
            productsInCart = req.session.cart.products;
            _context.next = 4;
            return regeneratorRuntime.awrap(Product.findOne({
              where: {
                id: productId
              }
            }));

          case 4:
            productToAdd = _context.sent;
            // Si on a déjà le produit dans le panier , on met à jour la quantité, sinon on ajoute le produit au panier
            found = productsInCart.find(function (prod) {
              return parseInt(prod.id) === productToAdd.id;
            });

            if (found) {
              found['qty'] += 1;
              req.session.cart.products = productsInCart.map(function (prod) {
                return prod.id === found.id ? found : prod;
              });
            } else {
              productToAdd.dataValues['qty'] = 1;
              req.session.cart.products.push(productToAdd);
            }

            res.redirect('/shop');

          case 8:
          case "end":
            return _context.stop();
        }
      }
    });
  },
  remove: function remove(req, res) {
    var productId = parseInt(req.params.productId);
    var productsInCart = req.session.cart.products;
    var newProducts = productsInCart.filter(function (prod) {
      return prod.id !== productId;
    });
    req.session.cart.products = newProducts;
    res.redirect('/cart');
  },
  destroy: function destroy(req, res) {
    req.session.cart = {};
    req.session.cart['products'] = [];
    res.locals.cart = req.session.cart;
    res.redirect('/shop');
  }
};
module.exports = cartController;