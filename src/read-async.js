'use strict';

const read = require('read');

module.exports = (param) => {
    return new Promise((resolve, reject) => {
        read(param, (err, data) => {
            if (err !== null) return reject(err);
            resolve(data);
        });
    });
};
