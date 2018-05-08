const express = require('express');
const productRouter = express.Router();
const ProductController = require('../../controllers/ProductController');

const myLogger = require('../../Logger');
productRouter.use(myLogger);

productRouter.get('/', (req, res) => {
    ProductController.findAll()
        .then((products) => {
            res.status(200).json(products);
        })
        .catch((err) => {
            res.status(500).end();
        });
});

productRouter.get('/:id', (req, res) => {
    if (req.params.id === undefined) {
        res.status(400).end();
        return;
    }

    ProductController.findById(parseInt(req.params.id))
        .then((product) => {
            if (product === null) {
                res.status(404).end();
                return;
            }

            res.status(200).json(product);
        }).catch((err) => {
            res.status(500).end();
        });
});

productRouter.post('/', (req, res) => {
    if (req.body.name === undefined || req.body.price === undefined || req.body.isAdvertised === undefined || req.body.promotion === undefined) {
        res.status(400).end();
        return;
    }

    ProductController.create(req.body.name, parseFloat(req.body.price), req.body.isAdvertised, parseFloat(req.body.promotion))
        .then((product) => {
            res.status(201).json(product);
        })
        .catch((err) => {
            res.status(500).end();
        });
});

productRouter.put('/:id', (req, res) => {
    if (req.params.id === undefined || req.body.name === undefined || req.body.price === undefined || req.body.isAdvertised === undefined
    || req.body.promotion === undefined) {
        res.status(400).end();
    }

    ProductController.update(parseInt(req.params.id), req.body.name, req.body.price, req.body.isAdvertised, req.body.promotion)
        .then((product) => {
            res.status(201).json(product);
        }).catch((err) => {
            res.status(404).end();
        });
});

productRouter.delete('/:id', (req, res) => {
    if (req.params.id === undefined) {
        res.status(400).end();
        return;
    }

    ProductController.destroy(parseInt(req.params.id))
        .then((product) => {
            res.status(200).json(product);
        }).catch((err) => {
            res.status(404).end();
        });
});

module.exports = productRouter;
