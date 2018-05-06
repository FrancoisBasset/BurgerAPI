const express = require('express');
const productRouter = express.Router();
const ProductController = require('../../controllers/ProductController');
const AdvertiseController = require('../../controllers/AdvertiseController');

productRouter.get('/', (req, res) => {
    ProductController.findAll()
        .then((products) => {
            res.status(200).json(products);
        })
        .catch((err) => {
            res.status(500).end();
        });
});

productRouter.get('/bestseller', (req, res) => {
    AdvertiseController.findProducts()
        .then((products) => {
            res.status(200).json(products);
        })
        .catch((err) => {
            res.status(500).end();
        });
});

module.exports = productRouter;
