import connection from '../db.connection';

class Ructor {

	constructor(table) {
		this.db = connection.connect;
		this.table = table;
	}

	execute(sentence) {
		return this.db().then(pool => {
			return pool
				.request()
				.query(sentence)
				.then((result) => {
					connection.close();
					return result;
				});
		});
	}

	all(table = this.table) {
		let sentence = `select * from ${table}`;
		return this.execute(sentence);
	}

	findBy(table = this.table, where, val) {
		let sentence = `select ${val} from ${table} where ${where}`;
		return this.execute(sentence);
	}

	insert(val,table = this.table, custom = '') {
		let sentence = `declare @t table (id_${table} int) insert into ${table} ${custom} Output inserted.id_${table} into @t values (${val}) select * from @t `;
		return this.execute(sentence);
	}

	update(val, where ,table = this.table ) {
		let sentence = `update ${table} set ${val} where ${where}`;
		return this.execute(sentence);
	}

	delete(table = this.table, where) {
		let sentence = `delete ${table} where ${where}`;
		return this.con(sentence, false);
	}
}
module.exports = Ructor;