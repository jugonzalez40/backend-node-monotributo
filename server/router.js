import Connection from './db.connection';

import Test from './api/test'
class Router {
	constructor(app = null) {
		this.db = new Connection();
		this.app = app;
		this.app.use(new Test(this.db));
		return this.app.route;
	}
}

module.exports = Router;