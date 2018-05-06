const Product = require('../models').Product;
const ProductController = {};

ProductController.findAll = () => {
    return Product.findAll();
};

ProductController.findById = (id) => {
    return Product.findById(id);
};

ProductController.create = (name, price, isAdvertised, promotion) => {
    return Product.create({
        name: name,
        price: price,
        isAdvertised: isAdvertised,
        promotion: promotion
    });
};

ProductController.update = (id, name, price, isAdvertised, promotion) => {
    return Product.findById(id)
        .then((product) => {
            return product.update({
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

ProductController.destroy = (id) => {
    return Product.findById(id)
        .then((product) => {
            return product.destroy()
                .then((res) => {
                    return res;
                });
        });
};

module.exports = ProductController;
