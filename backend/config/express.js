const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
const rfs = require('rotating-file-stream');

const accessLogStream = rfs('access.log', {
    interval: '1d',
    path: path.join(__dirname, '..', 'log')
});

module.exports = (app) => {
    app.use(bodyParser.json());
    app.use(cors());
    app.use(morgan('combined', { stream: accessLogStream }));
};
