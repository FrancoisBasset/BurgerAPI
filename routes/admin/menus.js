const express = require('express');
const menuRouter = express.Router();
const MenuController = require('../../controllers/MenuController');

menuRouter.get('/', (req, res) => {
    MenuController.findAll()
        .then((menus) => {
            res.status(200).json(menus);
        })
        .catch((err) => {
            res.status(500).end();
        });
});

menuRouter.get('/:id', (req, res) => {
    if (req.params.id === undefined) {
        res.status(400).end();
        return;
    }

    MenuController.findById(parseInt(req.params.id))
        .then((menu) => {
            if (menu === null) {
                res.status(404).end();
                return;
            }

            res.status(200).json(menu);
        })
        .catch((err) => {
            res.status(500).end()
        });
});

menuRouter.post('/', (req, res) => {
    if (req.body.name === undefined || req.body.price === undefined || req.body.isAdvertised === undefined || req.body.promotion === undefined) {
        res.status(400).end();
    }

    MenuController.create(req.body.name, req.body.price, req.body.isAdvertised, req.body.promotion)
        .then((menu) => {
            res.status(201).json(menu);
        })
        .catch((err) => {
            res.status(500).end();
        });
});

menuRouter.put('/:id', (req, res) => {
    if (req.params.id === undefined || req.body.name === undefined || req.body.price === undefined || req.body.isAdvertised === undefined
        || req.body.promotion === undefined) {
        res.status(400).end();
    }

    MenuController.update(parseInt(req.params.id), req.body.name, req.body.price, req.body.isAdvertised, req.body.promotion)
        .then((menu) => {
            res.status(201).json(menu);
        }).catch((err) => {
            res.status(404).end();
        });
});

menuRouter.delete('/:id', (req, res) => {
    if (req.params.id === undefined) {
        res.status(400).end();
        return;
    }

    MenuController.destroy(parseInt(req.params.id))
        .then((menu) => {
            res.status(200).json(menu);
        }).catch((err) => {
            res.status(404).end();
        });
});

menuRouter.put('/products/:menu/:product', (req, res) => {
    if (req.params.menu === undefined || req.params.product === undefined) {
        res.status(400).end();
        return;
    }

    MenuController.addProduct(parseInt(req.params.menu), parseInt(req.params.product))
        .then((product) => {
            res.status(200).json(product);
        })
        .catch((err) => {
            res.status(500).end();
        });
});

menuRouter.delete('/products/:product', (req, res) => {
    if (req.params.product === undefined) {
        res.status(400).end();
        return;
    }

    MenuController.deleteProduct(parseInt(req.params.product))
        .then((product) => {
            res.status(200).json(product);
        })
        .catch((err) => {
            res.status(500).end();
        });
});

menuRouter.get('/products/:menu', (req, res) => {
    if (req.params.menu === undefined) {
        res.status(400).end();
        return;
    }

    MenuController.findById(parseInt(req.params.menu))
        .then((menu) => {
            if (menu === null) {
                res.status(404).end();
                return;
            }
        })

    MenuController.getProducts(parseInt(req.params.menu))
        .then((products) => {
            res.status(200).json(products);
        }).catch((err) => {
            res.status(500).end();
    });
});

module.exports = menuRouter;
