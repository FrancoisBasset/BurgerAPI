const express = require('express');
const promotionRouter = express.Router();
const PromotionController = require('../../controllers/PromotionController');

promotionRouter.get('/menus', (req, res) => {
    PromotionController.findMenus()
        .then((menus) => {
            res.status(200).json(menus);
        })
        .catch((err) => {
            res.status(500).end();
        });
});

promotionRouter.get('/products', (req, res) => {
    PromotionController.findProducts()
        .then((products) => {
            res.status(200).json(products);
        })
        .catch((err) => {
            res.status(500).end();
        });
});

module.exports = promotionRouter;