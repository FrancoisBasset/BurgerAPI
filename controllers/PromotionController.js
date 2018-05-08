const Menu = require('../models').Menu;
const Product = require('../models').Product;

const PromotionController = {};
const Op = require('../models').Sequelize.Op;

PromotionController.findMenus = () => {
    return Menu.findAll({
        where: {
            promotion: {
                [Op.lt]: require('../models').Sequelize.col('price')
            }
        }
    });
};

PromotionController.findProducts = () => {
    return Product.findAll({
        where: {
            promotion: {
                [Op.lt]: require('../models').Sequelize.col('price')
            }
        }
    });
};

PromotionController.promoteMenu = (menu, promotion) => {
    return Menu.findById(menu)
        .then((menu) => {
            return menu.update({
                promotion: promotion
            });
    });
};

PromotionController.promoteProduct = (product, promotion) => {
    return Product.findById(product)
        .then((product) => {
            return product.update({
                promotion: promotion
            });
        });
};

PromotionController.deleteMenu = (menu) => {
    return Menu.findById(menu)
        .then((menu) => {
            return menu.update({
                promotion: require('../models').Sequelize.col('price')
            });
        });
};

PromotionController.deleteProduct = (product) => {
    return Product.findById(product)
        .then((product) => {
            return product.update({
                promotion: require('../models').Sequelize.col('price')
            });
        });
};

module.exports = PromotionController;
