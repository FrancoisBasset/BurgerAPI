const express = require('express');
const advertiseRouter = express.Router();

const AdvertiseController = require('../../controllers/AdvertiseController');

const myLogger = require('../../Logger');
advertiseRouter.use(myLogger);

advertiseRouter.get('/menus', (req, res) => {
    AdvertiseController.findMenus()
        .then((menus) => {
            res.status(200).json(menus);
        })
        .catch((err) => {
            res.status(500).end();
        });
});

advertiseRouter.get('/products', (req, res) => {
    AdvertiseController.findProducts()
        .then((products) => {
            res.status(200).json(products);
        })
        .catch((err) => {
            res.status(500).end();
        });
});

advertiseRouter.put('/menus/:menu', (req, res) => {
    if (req.params.menu === undefined) {
        res.status(400).end();
        return;
    }

    AdvertiseController.advertiseMenu(parseInt(req.params.menu))
        .then((menu) => {
            res.status(200).json(menu);
        })
        .catch((err) => {
            res.status(500).end();
        });
});

advertiseRouter.put('/products/:product', (req, res) => {
    if (req.params.product === undefined) {
        res.status(400).end();
        return;
    }

    AdvertiseController.advertiseProduct(parseInt(req.params.product))
        .then((product) => {
            res.status(200).json(product);
        })
        .catch((err) => {
            res.status(500).end();
        });
});

advertiseRouter.delete('/menus/:menu', (req, res) => {
    if (req.params.menu === undefined) {
        res.status(400).end();
        return;
    }

    AdvertiseController.deleteMenu(parseInt(req.params.menu))
        .then((menu) => {
            res.status(200).json(menu);
        })
        .catch((err) => {
            res.status(500).end();
        });
});

advertiseRouter.delete('/products/:product', (req, res) => {
    if (req.params.product === undefined) {
        res.status(400).end();
        return;
    }

    AdvertiseController.deleteProduct(parseInt(req.params.product))
        .then((product) => {
            res.status(200).json(product);
        })
        .catch((err) => {
            res.status(500).end();
        });
});

module.exports = advertiseRouter;
