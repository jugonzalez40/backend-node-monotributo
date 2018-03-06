import express from 'express';
import Ructor from '../ructor.js'

class Contribuyente {
	constructor() {
		this.db = new Ructor('contribuyente');
		//
		this.get = this.get.bind(this);
		this.post = this.post.bind(this);
		this.put = this.put.bind(this);
		this.patch = this.patch.bind(this);
		this.delete = this.delete.bind(this);
		//
		this.router = express.Router();
		this.path = '/contribuyente';
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
		res.send(`contribuyente by id: ${m}`);
	}

	get(req, res, next) {
		this.db.all().then((result) => {
			res.send(result.recordset);
		});
	}

	post(req, res, next) {
		this.db.insert(req.body.val).then((result) => {
			res.send(result.recordset);
		});
	}

	put(req, res, next) {
		this.db.update(req.body.val).then((result) => {
			res.send(result.recordset);
		});
	}

	patch(req, res, next) {
		res.send('contribuyente patch');
	}

	delete(req, res, next) {
		res.send('contribuyente delete');
	}
}

module.exports = Contribuyente;