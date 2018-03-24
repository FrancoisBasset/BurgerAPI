const express = require('express');
const menuRouter = express.Router();

menuRouter.get('/', (req, res) => {
  res.status(200).send('Route menu')
})

module.exports = menuRouter;
