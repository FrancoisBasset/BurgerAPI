const express = require('express');
const commandRouter = express.Router();
const Customer = require('../../models').Customer;

const CommandController = require('../../controllers/CommandController');

commandRouter.post('/products', (req, res) => {
    if (req.body.product === undefined || req.body.quantity === undefined) {
        res.status(400).end();
        return;
    }

    CommandController.commandProduct(parseInt(req.body.product), parseInt(req.body.quantity))
        .then((command) => {
            res.status(201).json(command);
        })
        .catch((err) => {
            res.status(500).send(err);
        });
});

commandRouter.post('/menus', (req, res) => {
    if (req.body.menu === undefined || req.body.quantity === undefined) {
        res.status(400).end();
        return;
    }

    CommandController.commandMenu(parseInt(req.body.menu), parseInt(req.body.quantity))
        .then((command) => {
            res.status(201).json(command);
        })
        .catch((err) => {
            res.status(500).send(err);
        });
});

module.exports = commandRouter;
