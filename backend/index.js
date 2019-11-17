const express = require('express');

const config = require('./config');

const app = express();

config.express(app);
config.routes(app);
config.production(app, express);

const { port } = config.env;

app.listen(port, () => console.log(`Listening on port ${port}...`))
