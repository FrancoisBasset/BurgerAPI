const express = require('express');
const promotionRouter = express.Router();

const PromotionController = require('../../controllers/PromotionController');

const myLogger = require('../../Logger');
promotionRouter.use(myLogger);

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

promotionRouter.put('/menus/:menu/:promotion', (req, res) => {
    if (req.params.menu === undefined || req.params.promotion === undefined) {
        res.status(400).end();
        return;
    }

    PromotionController.promoteMenu(parseInt(req.params.menu), parseInt(req.params.promotion))
        .then((menu) => {
            res.status(200).json(menu);
        })
        .catch((err) => {
            res.status(500).end();
        });
});

promotionRouter.put('/products/:product/:promotion', (req, res) => {
    if (req.params.product === undefined || req.params.promotion === undefined) {
        res.status(400).end();
        return;
    }

    PromotionController.promoteProduct(parseInt(req.params.product), parseInt(req.params.promotion))
        .then((product) => {
            res.status(200).json(product);
        })
        .catch((err) => {
            res.status(500).end();
        });
});

promotionRouter.delete('/menus/:menu', (req, res) => {
    if (req.params.menu === undefined) {
        res.status(400).end();
        return;
    }

    PromotionController.deleteMenu(parseInt(req.params.menu))
        .then((menu) => {
            res.status(200).json(menu);
        })
        .catch((err) => {
            res.status(500).end();
        })
});

promotionRouter.delete('/products/:product', (req, res) => {
    if (req.params.product === undefined) {
        res.status(400).end();
        return;
    }

    PromotionController.deleteProduct(parseInt(req.params.product))
        .then((product) => {
            res.status(200).json(product);
        })
        .catch((err) => {
            res.status(500).end();
        })
});

module.exports = promotionRouter;
