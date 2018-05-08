const express = require('express');
const customerRouter = express.Router();

const bodyParser = require('body-parser');
customerRouter.use(bodyParser.json());

customerRouter.use('/menus', require('./menus'));
customerRouter.use('/products', require('./products'));
customerRouter.use('/promotions', require('./promotions'));
customerRouter.use('/command', require('./command'));

module.exports = customerRouter;
