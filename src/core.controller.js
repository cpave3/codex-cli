'use strict';
const read = require('./read-async.js');
const fetch = require('node-fetch');
const config = require('../config.json');

module.exports.login = () => {
    let username, password;
    // Get user input for username
    read({
        prompt: 'Username: '
    })
    .then((usernameInput) => {
        username = usernameInput;
    })
    .then(() => {
        // Get user input for password
        return read({
            prompt: 'Password: ',
            silent: true
        });
    })
    .then((passwordInput) => {
        password = passwordInput;
    })
    .then(() => {
        console.log([username, password]);
        return fetch(`${config.api.url}/login`, {
            method: 'POST',
            body: JSON.stringify({
                username,
                password
            }),
            headers: {'Content-Type': 'application/json'}
        });        
    })
    .then(res => res.json())
    .then(json => console.log(json))
    .catch((err) => {
        console.log(`[!] ${err}`);
    });
}
