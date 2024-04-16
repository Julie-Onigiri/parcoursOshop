const { Category, Product } = require('../models');

const catalogController = {
    index: async (req, res) => {
        res.render('index');
    },

    async productsList (req, res)  {
        try {
            
            const products =await Product.findAll();
            console.log(JSON.stringify(products, null, 2));
             const categories =await Category.findAll() ;
             console.log(JSON.stringify(categories, null, 2));

            res.render('shop', { 
                categories,
                products 
            });

        } catch (error) {
            console.log(error);
            res.status(500).send('Server Error');
        }
    },
   //Le but est de retrouver l identifiant de ma route pour rechercher la bonne categorie cad req.params.id 
   category: async (req, res) => {
    try {
        // on récupère l'id de la route paramétrée
        const id = req.params.id;
        // on ajoute un include pour avoir accès à une propriété products sur l'objet category contenant les produits dans un tableau 
        const category = await Category.findByPk(id, {
            include: 'products',
        });
        res.render('category', {
            category,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send('Server Error');
    }
},

    product: async (req, res) => {
        try {
             const productId = parseInt(req.params.id);
             const product = await Product.findByPk(productId);
                
      

             res.render('product', {
                product,
            });
    }catch (error) {
        console.error(error.message)
        res.status(500).render('500')
      }
    },

    cart: (req, res) => {
        res.render('cart');
    },
};

module.exports = catalogController;
