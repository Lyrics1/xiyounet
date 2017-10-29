

const  express = require('express');
// express不能直接处理post数据，需要引入中间件来处理。
// app.use(require('body-parser')())//失效
const  bodyParser = require('body-parser');
const session = require("express-session");
const cookieParser = require("cookie-parser");


const bmp = require("./bmp.js");//生成验证码
const  Sign = require('./sign');
const Status = require('./status');

const app = express();
var code;

app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

//设置session
app.use(cookieParser());
app.use(session({
    secret: '123',
    cookie: {
        maxAge: 60000 * 60,
        secure: false,
    }, //设置有效时间是1小时
    resave: false,
    saveUninitialized: false
}));

//跨域
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Credentials', true);
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});


app.get('/', function(req, res) {
    bmp(req, res); //生成验证码，发送到前端并存储进session
    res.end();
});
//检测验证码
app.get('/check', function(req, res){

    var data = req.query.data;
    // console.log(req);
    console.log("接收到来自客户端的验证码验证请求");
    if(req.session.code){
        if (data.toLowerCase() == req.session.code.toLowerCase()) {
            var obj = { 'status': true };
            console.log("验证通过");
            delete req.session.code;
            //bmp(req, res);
            res.setHeader('Access-Control-Allow-Credentials', true);
            res.end(req.query.callback + '(' + JSON.stringify(obj) + ')');
        }else{
            var obj = { 'status': false };
            console.log("验证失败");
            res.setHeader('Access-Control-Allow-Credentials', true);
            res.end(req.query.callback + '(' + JSON.stringify(obj) + ')');
        }
        
    }
});

//注册
app.post('/sign',(req,res)=>{

	console.log(req.body.direct);
	const name = req.body.name;
	const id = req.body.id;//学号
	const tel = req.body.tel;
	const email =req.body.email;
	const className = req.body.thclass;
	const direction = req.body.direct;
	const data ={
		"name" : name,
		"id" : id,
		"tel" :tel,
		"email" : email,
		"class" : className,
		"direction" : direction
	}
	//正则验证
	checkCode=(data)=>{
		const nameExp =  /^[\u4E00-\u9FA5]{2,20}$/;
		const stuNumExp = /^\d{8}$/;
		const classExp = /^[\d\u4e00-\u9fa5]{6,10}$/;
		const  phonEexp =/^1[3-9][0-9]{9}$/;
		const emailExp =  /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+$/;

		if(nameExp.test(data.name) && stuNumExp.test( data.id) && 
			classExp.test(data.class) && phonEexp .test(data.tel) && 
			emailExp.test(data.email)){
			return true;
		}
		return false;
	}
	if(checkCode){

		Sign.sign(data,(result)=>{
					console.log(result);
					var end = { status :result}
					var ends = JSON.stringify(end);	
					console.log(ends);
					res.send(ends);
				})
	}else{
		res.send(4);//表示输入信息格式不正确,请重新填写提交
	}	
});

//查询状态
app.post('/status',(req,res)=>{
	console.log(req.body.name);
	const name = req.body.name;
	const id = req.body.id;//学号
	console.log(id)
	var data ={
		"name" : name,
		"id" : id
	}
	Status.status(data,(result)=>{
		console.log(result);
		var end = { status :result}
		var ends = JSON.stringify(end);	
		console.log(ends);
		res.send(ends);
	})
});

app.listen(3000,() => console.log("port 3000") );