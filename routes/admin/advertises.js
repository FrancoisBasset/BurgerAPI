const express = require('express');
const advertiseRouter = express.Router();

advertiseRouter.get('/', (req, res) => {
  res.status(200).send('Route advertise');
})

module.exports = advertiseRouter;
