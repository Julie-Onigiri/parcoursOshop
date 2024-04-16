const { Category, Product } = require('../models');

const catalogController = {
    index: async (req, res) => {
        res.render('index');
    },

    async productsList (req, res)  {
        try {
            
            // const products =await Product.findAll();
            // console.log(JSON.stringify(products, null, 2));
             const categories =await Category.findAll() ;
             console.log(JSON.stringify(categories, null, 2));

            res.render('shop', { 
                categories,
                // products 
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
        try {
             const productId = parseInt(req.params.id);
             const product = await Product.findByPk(
                productId,{
                    include:['category']
                }
             )

        // todo, récupérer le produit demandé en base de données.
        res.render('product');
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
