const express = require('express');
const productRouter = express.Router();
const ProductController = require('../../controllers/ProductController');

productRouter.get('/', (req, res) => {
  ProductController.getAll()
  .then((products) => {
    res.status(200).json(products);
  })
  .catch((err) => {
    res.status(500).end();
  })
});

productRouter.get('/:id', (req, res) => {
  const productId = parseInt(req.params.id);

  ProductController.getById(productId)
  .then((product) => {
    if (product === null) {
      res.status(404).end();
      return;
    }
    console.log(product);
    res.status(200).json(product);
  }).catch((err) => {
    res.status(500).end();
  });
});

productRouter.post('/', (req, res) => {
  ProductController.add(req.body.name, parseFloat(req.body.price), req.body.isAdvertised)
  .then((product) => {
    res.status(201).json(product);
  })
  .catch((err) => {
    res.status(500).end();
  });
});

productRouter.put('/:id', (req, res) => {
  const productId = parseInt(req.params.id);

  ProductController.modify(productId, req.body.name, req.body.price, req.body.isAdvertised)
  .then((product) => {
    res.status(201).end();
  }).catch((err) => {
    res.status(404).end();
  })
});

productRouter.delete('/:id', (req, res) => {
  const productId = parseInt(req.params.id);

  ProductController.delete(productId)
  .then(() => {
    res.status(200).end();
  }).catch((err) => {
    console.log(err);
    res.status(404).end();
  });
});

module.exports = productRouter;
