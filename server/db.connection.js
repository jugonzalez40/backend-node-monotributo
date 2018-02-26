
var mysql = require('mysql');
var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database : 'mono'
});

connection.connect(function (err) {
	if (err) {
		console.error('error connecting: ' + err.stack);
		return;
	}

	console.log('connected as id ' + connection.threadId);
});
var squery = 'select * from contribuyente where identificacion = 1031163274'; 
connection.query(squery, function (error, results, fields) {
	if (error) throw error;
	for (var i in results) {
		console.log('Data:', results[i]);
	}
	// connected!
});

connection.end(); //Disconnect ! 