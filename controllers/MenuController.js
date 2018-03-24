const Menu = require('../models/Menu');
const MenuController = function() {};

MenuController.getAll = function() {
  return Menu.findAll();
};

MenuController.getById = function(id)  {
  return Menu.findById(id);
};

MenuController.getAllProducts = function(id) {

};

MenuController.add = function(name, price, isAdvertised) {
  return Menu.create({
    name: name,
    price: price,
    isAdvertised: isAdvertised
  });
};

MenuController.addProduct = function(id) {

};

MenuController.modify = function(id, key, value) {

};

MenuController.delete = function(id) {

};

module.exports = MenuController;
