const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log('This is the first middleware.');
    next();
});
app.use((req, res, next) => {
    console.log('This is the second middleware');
    res.send('Hello from express!');
});

module.exports = app;