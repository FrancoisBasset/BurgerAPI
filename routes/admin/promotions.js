const express = require('express');
const promotionRouter = express.Router();

promotionRouter.get('/', (req, res) => {
  res.status(200).send('Route promotion');
});

module.exports = promotionRouter;
