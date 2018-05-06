const express = require('express');
const menuRouter = express.Router();
const MenuController = require('../../controllers/MenuController');
const AdvertiseController = require('../../controllers/AdvertiseController');

menuRouter.get('/', (req, res) => {
   MenuController.findAll()
       .then((menus) => {
           res.status(200).json(menus);
       })
       .catch((err) => {
           res.status(500).end();
       });
});

menuRouter.get('/bestseller', (req, res) => {
    AdvertiseController.findMenus()
        .then((menus) => {
            res.status(200).json(menus);
        })
        .catch((err) => {
            res.status(500).end();
        });
});

module.exports = menuRouter;
