const express = require('express');
const adminRouter = express.Router();

const bodyParser = require('body-parser');
adminRouter.use(bodyParser.json());

adminRouter.use('/products', require('./products'));
adminRouter.use('/menus', require('./menus'));
adminRouter.use('/promotions', require('./promotions'));
adminRouter.use('/advertises', require('./advertises'));

module.exports = adminRouter;
