//External imports
import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import Router from './router';
import fs from 'fs';
//Config
import SERVER_CONFIG from '../config/server.config.json';

class Server {
	constructor() {
		this.app = express();
		this.app.use(bodyParser.urlencoded({extended: false}));
		this.app.use(bodyParser.json());
		this.app.use(morgan('common', {stream: fs.createWriteStream('./access.log', {flags: 'a'})}));
		//Console logger
		this.app.use(morgan('dev'));

		this.router = new Router(this.app);
		this.start();
	}

	start() {
		this.app.listen(SERVER_CONFIG.port, this.connected);
		this.app.on('error', () => {
			console.log('Fuck off');
		});
	}

	connected() {
		console.log('connected');
	}
}

module.exports = Server;