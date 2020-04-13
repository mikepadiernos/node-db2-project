const express = require('express');
const middle = require('./middleware/middleware.js');

const logger = middle.logger;
const server = express();

server.use(logger, express.json());

const cars = require('./routers/cars-router.js');

server
	.route('/')
	.get((req, res) => {
		res.send(`Ludicrous speed, GO!`);
	});

server.use('/api/cars', cars);
server.use('/cars', cars);

module.exports = server;
