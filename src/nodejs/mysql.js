var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : '183.111.138.176',
  user     : 'q7271',
  password : 'wldnjsdldua1!',
  database : 'q7271',
  multipleStatements: true,
  
  typeCast: function (field, next) {
      if (field.type == 'VAR_STRING') {
          return field.string();
      }
      return next();
  }
});
  
connection.connect();
  
/*
connection.query('SELECT * FROM customer', function (error, results, fields) {
    if (error) {
        console.log(error);
    }
    console.log(results[0]);
});
*/

connection.query('SELECT * FROM customer', function (error, results, fields) {
    if (error) {
        console.log(error);
    }
    console.log(results[0]);
});


  connection.end();