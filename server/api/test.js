import express from 'express';

class Test {
	constructor(dbConnection) {
		this.db = dbConnection;
		this.router = express.Router();
		this.path = '/test';
		//
		this.router.get(this.path, this.get);
		this.router.get(`${this.path}/:id`, this.getById);
		this.router.post(this.path, this.post);
		this.router.put(this.path, this.put);
		this.router.patch(this.path, this.patch);
		this.router.delete(this.path, this.delete);

		return this.router;
	}

	getById(req, res, next) {
		let m = req.params + parseInt(req.params.kj);
			res.send(`Test by id: ${m}`);
	}

	get(req, res, next) {
		res.send('Test get');
	}

	post(req, res, next) {
		res.send('Test post');
	}

	put(req, res, next) {
		res.send('Test put');
	}

	patch(req, res, next) {
		res.send('Test patch');
	}

	delete(req, res, next) {
		res.send('Test delete');
	}
}

module.exports = Test;