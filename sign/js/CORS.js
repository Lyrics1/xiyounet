
//js
$.ajax({
                url: 'http://localhost:3000/sign',
                type: 'POST',
                dataType :'JSON',
                data:Obj,
                xhrFields:   {'Access-Control-Allow-Origin': '*'}, //CORS跨域指定 + dataType
                success:function(data){
                        // alert("fff");
                        console.log(data)
                },
                error:function(err){
                    // console.log("err"+err);
                }


            });






//后端,服务器端
 res.header("Access-Control-Allow-Origin", "*");


 //跨域
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});


