const path = require('path');

const express = require('express');

const config = require('./config');

const app = express();

config.express(app);
config.routes(app);
config.production(app);

const { port } = config.env;

app.listen(port, () => console.log(`Listening on port ${port}...`))
