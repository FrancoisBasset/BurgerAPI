const express = require('express');
const adminRouter = express.Router();

const bodyParser = require('body-parser');
adminRouter.use(bodyParser.json());

const jwt = require('jsonwebtoken');
const token = jwt.sign({}, "pass");

const session = require('express-session');
adminRouter.use(session({secret: "pss"}));

adminRouter.post('/authenticate', (req, res) => {
    if (req.session.auth !== undefined) {
        res.status(200).send("already auth");
        return;
    }

    if (req.body.pass === undefined) {
        res.status(401).send("null");
        return;
    }

    jwt.verify(token, req.body.pass, (err) => {
        if (err) {
            res.status(401).send("incorrect");
            return;
        }
    });

    req.session.auth = token;

    res.status(200).end();
});

adminRouter.get('/disconnect', (req, res) => {
    req.session.auth = undefined;
    res.status(200).end();
});

adminRouter.use('/products', require('./products'));
adminRouter.use('/menus', require('./menus'));
adminRouter.use('/promotions', require('./promotions'));
adminRouter.use('/advertises', require('./advertises'));

module.exports = adminRouter;
