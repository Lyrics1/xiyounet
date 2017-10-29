status=(data,callback)=>{
	
	const mysql = require('mysql');
	const config = require('./Mysql.config.js');
	const connection = mysql.createConnection(config);
	var status = 1;//表示正常
	connection.connect((err)=>{
		if(err){
			return console.log('error'+err.message);
		}
		console.log("connection success mysql")
	});

	//先检测是否已经报过名
	const checkSql = `SELECT ID FROM student WHERE ID = "${data.id}"`;
	connection.query(checkSql,(err,results,fields)=>{
		if(err){
			return console.error(err.message);	
		}
		if(results.length==0){
			status = 4;//查询失败
			callback(status);
		}else{
			const Sql = `SELECT status FROM student WHERE ID = "${data.id}"`;
			connection.query(Sql,(err,results,fields)=>{
				if(err){
					return console.error(err.message);
					status = 5;//异常查询失败
				}
				console.log(results[0].status)
				callback(results[0].status);
			})

			connection.end((err)=>{
				if(err){
					return console.log('error'+err.message);
				}
				console.log("Close the database connection.")
			})
		}
		
	})


}

module.exports.status=status;