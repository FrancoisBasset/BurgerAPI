const express = require('express');
const app = express();

const RouterManager = require('./routes');
const ModelIndex = require('./models');

ModelIndex.openDatabase()
    .then(() => {
        app.listen(3000, (req, res) => {
            console.log('Server started at 3000');
        });

        RouterManager.attach(app);
    })
    .catch((err) => {
        console.error(err);
    });