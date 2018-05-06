const express = require('express');
const RouterManager = {};

RouterManager.attach = (app) => {
    app.use('/admin', require('./admin'));
    app.use('/customer', require('./customer'));
};

module.exports = RouterManager;
