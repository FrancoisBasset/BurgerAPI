const express = require('express');
const customerRouter = express.Router();

/*customerRouter.use('/menus', require('./menus'));
customerRouter.use('/products', require('./products'));
customerRouter.use('/promotions', require('./promotions'));
customerRouter.use('/command', require('./command'));*/

customerRouter.get('/', (req, res) => {
  res.send('Route client');
});

module.exports = customerRouter;
