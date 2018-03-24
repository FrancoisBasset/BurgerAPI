const Product = require('../models').Product;

const ProductController = function() {};

ProductController.getAll = function() {
  return Product.findAll();
};

ProductController.getById = function(id) {
  return Product.findById(id);
};

ProductController.add = function(name, price, isAdvertised) {
  return Product.create({
    name: name,
    price: price,
    isAdvertised: isAdvertised
  });
};

ProductController.modify = function(id, name, price, isAdvertised) {
  return Product.update({
      name: name,
      price: price,
      isAdvertised: isAdvertised
    }, {
      where: {
        id: id
      }
    }
  );
};

ProductController.delete = function(id) {
  return Product.findById(id)
  .then((product) => {
    product.destroy()
    .then((res) => {
      return res;
    });
  });
};

module.exports = ProductController;
