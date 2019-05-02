const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');

const server = express();

const dishesRouter = require('../dishes/dishes-router');
const recipesRouter = require('../recipes/recipes-router');

server.use(express.json());
server.use(helmet());
server.use(morgan('dev'));

server.use('/api/dishes', dishesRouter);
server.use('/api/recipes', recipesRouter);

server.get('/', (req, res) => {
    res.send('Server is running!');
});

module.exports = server;
