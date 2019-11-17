const env = require('./env.json');
const express = require('./express');
const production = require('./production');
const routes = require('./routes');

module.exports = {
    env,
    express,
    production,
    routes
}
