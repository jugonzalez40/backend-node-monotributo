import Contribuyente from './api/contribuyente';
import Comercio from './api/comercio';

class Router {
	constructor(app = null) {
		
		this.app = app;
		this.app.use(new Comercio());
		this.app.use(new Contribuyente());
		return this.app.route;
	}
}

module.exports = Router;