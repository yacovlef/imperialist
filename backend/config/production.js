const path = require('path');
const fs = require('fs');
const express = require('express');

module.exports = (app) => {
    const build = path.join(__dirname, '..', '..', 'frontend', 'build');
    const buildIndex = path.join(__dirname, '..', '..', 'frontend' ,'build', 'index.html');

    if (!fs.existsSync(build)) {
        return;
    }

    app.use(express.static(build));

    app.get('/*', function(req, res) {
        res.sendFile(buildIndex);
    });
}
