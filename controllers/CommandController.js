const Command = require('../models').Command;
const Customer = require('../models').Customer;

const ProductController = require('../controllers/ProductController');
const MenuController = require('../controllers/MenuController');
const CommandController = {};

CommandController.commandProduct = (product, quantity) => {
    return Customer.create()
        .then((customer) => {
            return Command.create({
                CustomerId: customer.id,
                ProductId: product,
                quantity: quantity
            });
        }).then((command) => {
            return ProductController.findById(product)
                .then((product) => {
                    command.dataValues.product = product;
                    command.dataValues.amount = command.dataValues.product.promotion * command.dataValues.quantity;
                    return command;
                });
        });
};

CommandController.commandMenu = (menu, quantity) => {
    return Customer.create()
        .then((customer) => {
            return Command.create({
                CustomerId: customer.id,
                MenuId: menu,
                quantity: quantity
            });
        }).then((command) => {
            return MenuController.findById(menu)
                .then((menu) => {
                    command.dataValues.menu = menu;
                    command.dataValues.amount = command.dataValues.menu.promotion * command.dataValues.quantity;
                    return command;
                });
        });
};

module.exports = CommandController;
