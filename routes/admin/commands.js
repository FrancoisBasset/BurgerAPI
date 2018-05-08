const express = require('express');
const commandRouter = express.Router();

const CommandController = require('../../controllers/CommandController');

const myLogger = require('../../Logger');
commandRouter.use(myLogger);

commandRouter.get('/', (req, res) => {
    CommandController.findAll()
        .then((commands) => {
            res.status(200).json(commands);
        })
        .catch((err) => {
            res.status(500).end();
        });
});

module.exports = commandRouter;