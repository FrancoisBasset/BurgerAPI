const express = require('express');
const menuRouter = express.Router();
const MenuController = require('../../controllers/MenuController');

menuRouter.get('/', (req, res) => {
  MenuController.getAll()
  .then((menus) => {
    res.status(200).json(menus);
  })
  .catch((err) => {
    res.status(500).end();
  })
});

menuRouter.get('/:id', (req, res) => {
  MenuController.getById(parseInt(req.params.id))
  .then((menu) => {
    if (menu === undefined) {
      res.status(404).end();
      return;
    }
    res.status(200).json(menu);
  })
  .catch((err) => {
    res.status(500).end()
  });
});

module.exports = menuRouter;
