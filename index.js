#!/usr/bin/env node
'use strict';

const program = require('commander');
const core = require('./src/core.controller.js');
const config = require('./config.json');

program.version(config.version);

program
    .command('login')
    .description('Authenticate with the web service')
    .action(core.login);

program.parse(process.argv);
    
