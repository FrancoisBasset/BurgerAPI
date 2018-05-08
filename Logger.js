'use strict';

const myLogger = function (req, res, next) {
    if (req.session.auth === undefined) {
        res.status(401).send("not connected");
        return;
    }
    next();
};

module.exports = myLogger;