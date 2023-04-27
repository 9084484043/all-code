const mysql = require('mysql');

var connection = mysql.createConnection({
    host     : 'functionup-rds-mysql8-t4-20gib.cffqxyd9k6a4.ap-south-1.rds.amazonaws.com',
    port     :  3306,
    user     : 'data_analyst',
    password : 'sqlforjob',
    database : 'sandbox'
  });

  connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
   
    console.log('connected as id ' + connection.threadId);
  });

const sql= function  (sqlQuery, params) {
    return new Promise((resolve, reject) => {
      connection.query(sqlQuery,params, (err, result) => {
          if(err){reject(new Error());}
             else{resolve(result);}
          });
       });
};
   

module.exports= sql