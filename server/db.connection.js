import sql from 'mssql';
import SQL_CONFIG from '../config/db.config.json';

module.exports = {
	connect: ()=> {
		return sql.connect(SQL_CONFIG);
	},
	close: ()=> {
		sql.close();
	}
}; 
sql.on('error', err => {
	// ... error handler
});

// Query    
/*return pool.request()
		.query("SELECT * FROM contribuyente")
		.then((res)=>{
			console.log(res);
		})*/