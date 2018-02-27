import Connection from './db.connection';
import Contribuyente from './api/contribuyente';
import Comercio from './api/comercio';

class Router {
	constructor(app = null) {
		this.db = new Connection();
		this.app = app;
		this.app.use(new Comercio(this.db));
		this.app.use(new Contribuyente(this.db));
		return this.app.route;
	}
}

module.exports = Router;