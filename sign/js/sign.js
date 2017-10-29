sign = (data,callback) => {

	const mysql = require('mysql');
	const config = require('./Mysql.config.js');
	const connection = mysql.createConnection(config);
	var status = 1;//表示正常
	const Status = 1;//表示报名成功
	const defaults = "default";
	const view = 0;
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
		if(results.length != 0){
			status = 2;//异常已经报过名	
			console.log("checkName success mysql",status)
			callback(status);
		}else{
			console.log(data.direction+"KKKKKKKK")
			var Ddirection = Direction(data.direction);
			// const sql = "insert into student(name,id,num,tel,email,class,direction,status,counts,judge,interviewer) values ('1','1111','1224','1','1','1','1',1,1,'1',1)";

            // console.log(sql);
			// const info = [`${data.name}`,`${data.id}`,`${data.tel}`,`${data.email}`,`${data.class}`,`${Ddirection}`,Status,`${defaults}`,view]
			const sql = `INSERT INTO student (name,id,tel,email,class,direction,status,judge,interviewer) VALUES(?,?,?,?,?,?,?,?,?)`;

			const info = [`${data.name}`,`${data.id}`,`${data.tel}`,`${data.email}`,`${data.class}`,`${Ddirection}`,Status,`${defaults}`,view]
			connection.query(sql,info,(err,results,fields)=>{
				if(err){
					return console.error("EEEE",err);
					status = 3;//异常
					//callback("服务器繁忙");
				}
				console.log("INSERT success mysql")
				callback(status);
				connection.end((err)=>{
					if(err){
						return console.log('error'+err.message);
					}
					console.log("Close the database connection.")
				})
				

			});
		}
		
	})

	Direction=(direction)=>{
		if(direction==="安全组"){
			return 2;
		}else if(direction==="前端开发组"){
			return 1;
		}else if(direction==="运维组"){
			return 3;
		}else if(direction==="视觉设计组"){
			return 5;
		}else{
			return 4;
		}
	}
	

	
	

}

module.exports.sign=sign;
