const Menu = require('../models').Menu;
const Product = require('../models').Product;
const MenuController = {};

const ProductController = require('../controllers/ProductController');

MenuController.findAll = () => {
    return Menu.findAll();
};

MenuController.findById = (id) => {
    return Menu.findById(id);
};

MenuController.findAllProducts = (id) => {
    return MenuController.findById(id)
        .then((menu) => {
            return menu.products;
        });
};

MenuController.create = (name, price, isAdvertised, promotion) => {
    return Menu.create({
        name: name,
        price: price,
        isAdvertised: isAdvertised,
        promotion: promotion
    });
};

MenuController.addProduct = (menu, product) => {
    return ProductController.findById(product)
        .then((product) => {
            return product.update({
                MenuId: menu
            });
        });
};

MenuController.deleteProduct = (product) => {
    return ProductController.findById(product)
        .then((product) => {
            return product.update({
                MenuId: null
            });
        });
};

MenuController.getProducts = (menu) => {
    return Product.findAll({
        where: {
            MenuId: menu
        }
    });
};

MenuController.update = (id, name, price, isAdvertised, promotion) => {
    return Menu.findById(id)
        .then((menu) => {
            return menu.update({
                name: name,
                price: price,
                isAdvertised: isAdvertised,
                promotion: promotion
            }, {
                where: {
                    id: id
                }
            })
                .then((res) => {
                    return res;
                });
        });
};

MenuController.destroy = (id) => {
    return MenuController.findById(id)
        .then((menu) => {
            return menu.destroy({
                where: {
                    id: id
                }
            }).then((menu) => {
                return Product.update({
                    MenuId: null
                }, {
                    where: {
                        MenuId: menu.id
                    }
                }).then((products) => {
                    return menu;
                });
            });
        });
};

module.exports = MenuController;
