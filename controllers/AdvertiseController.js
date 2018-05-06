const Menu = require('../models').Menu;
const Product = require('../models').Product;

const AdvertiseController = {};

AdvertiseController.findMenus = () => {
    return Menu.findAll({
        where: {
            isAdvertised: true
        }
    });
};

AdvertiseController.findProducts = () => {
    return Product.findAll({
        where: {
            isAdvertised: true
        }
    });
};

AdvertiseController.advertiseMenu = (menu) => {
    return Menu.findById(menu)
        .then((menu) => {
            return menu.update({
                isAdvertised: true
            });
        });
}

AdvertiseController.advertiseProduct = (product) => {
    return Product.findById(product)
        .then((product) => {
            return product.update({
                isAdvertised: true
            });
        });
};

AdvertiseController.deleteMenu = (menu) => {
    return Menu.findById(menu)
        .then((menu) => {
            return menu.update({
                isAdvertised: false
            });
        });
};

AdvertiseController.deleteProduct = (product) => {
    return Product.findById(product)
        .then((product) => {
            return product.update({
                isAdvertised: false
            });
        });
};

module.exports = AdvertiseController;