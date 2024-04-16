const { Category, Product } = require('../models');

const catalogController = {
    index: async (req, res) => {
        res.render('index');
    },

    async productsList (req, res)  {
        try {
            // todo, ici il faudra les vrais produits et catégories de la db
            const products =await Product.findAll();
            // console.log(JSON.stringify(products, null, 2));
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
        const category = await Category.findByPk(req.params.id);
        console.log(JSON.stringify(category, null,2));
        res.render('category');
    },

    product: async (req, res) => {
        const product = await Product.findByPk(req.params.id);
        
        // todo, récupérer le produit demandé en base de données.
        res.render('product');
    },

    cart: (req, res) => {
        res.render('cart');
    },
};

module.exports = catalogController;
