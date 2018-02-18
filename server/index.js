//External imports
import express from 'express';
import bodyParser from 'body-parser';
import Router from './router'
//Config
import SERVER_CONFIG from '../config/server.config.json'

class Server {
	constructor(){
		this.app = express();
		this.app.use(bodyParser.urlencoded({extended: false }));
		this.app.use(bodyParser.json())
		this.router = new Router(this.app);
		this.start();
	}	

	start(){
		this.app.listen(SERVER_CONFIG.port, this.connected);
	}

	connected (){
		console.log('connected');
	}
}

module.exports = Server;