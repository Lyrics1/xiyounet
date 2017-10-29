    var it = document.getElementsByClassName("mes-out")[0];
    var bt = document.getElementsByClassName("butt")[0];
    var cx = document.getElementsByClassName("find")[0];
    var btna = document.getElementsByClassName("bta")[0];
    var lef = 0;
    var findf = document.getElementsByClassName("find-f")[0];
    var vb = document.getElementsByClassName("votebox")[0];
    var tim = null;
    var a;
    var select1 = document.getElementsByTagName('select')[0] //定位id
    var submit1=document.getElementById('submit');
    var find2 = document.getElementsByClassName("find-2")[0];
    var page3 = document.getElementsByClassName("page-3")[0];
    var err = document.getElementsByClassName("err")[0];
    var timer= null;
    var P = document.getElementsByClassName('zi')[0];
    var x=document.getElementsByTagName('input');
    var div=document.getElementsByClassName('check');
    var findDiv = document.getElementsByClassName("findcheck");
    var is = document.getElementsByClassName("charts")[0];
    var timer2 = null;
    var op = 0;
    var sta = 0;
    var stamsg;
    var errorOrNot1 = [0,0];
    var errorOrNot2 = [0,0,0,0,0];
    var rightShu1;//查询判断
    var rightShu2;//提交判断
    var rePro = document.getElementById("rePro");
    var img = document.getElementById("code");
   // console.log(div.length)
    var printtext=new Array();
    printtext=[
        "请填写中文名字",
        "请输入8位学号",
        "请填写中文名字",
        "请输入8位学号",
        "请填写专业+班级:如网络1603",
        "请填写11位手机号",
        "邮箱格式错误"
    ]
    var errtext = new Array();          //报名提示信息
        errtext = [
         "报名成功",
         "您已经报过名",
        "异常，没有报名成功",
        "输入信息格式有误"
        ]
    var finderr = new Array()
        finderr = [
            "异常没有报过名",
            "异常查询失败"
        ]
    function animate(sta){                         //进度条动画函数
    $(".charts").each(function(i,item){
        a=sta;
        $(item).animate({
            width: a+"%"
        },1000);
    })};

    function judge(st)
    {
        switch(st)
        {
            case 1:
            sta = 10;
            stamsg = "报名过";
            break;
            case 2:
            sta = 20;
            stamsg = "机考中";
            break;
            case 3:
            sta = 30;
            stamsg = "待面试";
            break;
            case 4:
            sta = 40;
            stamsg = "面试中";
            break;
            case 5:
            sta = 50;
            stamsg = "面试完成";
            break;
            case 6:
            sta = 70;
            stamsg = "过一面";
            break;
            case 7:
            sta = 60;
            stamsg = "一面未过";
            break;
            case 8:
            sta = 100;
            stamsg = "二面过";
            break;
            case 9:
            sta = 85;
            stamsg = "二面未过";
            break;
        }

    }

    btna.onclick = function()                                                           //弹出层效果
    {
       page3.style.height = "200px";
       find2.style.display = "none";
       findf.style.display = "block";
    }
    bt.onclick = function(){
    for(var i=0;i<errorOrNot1.length;i++)
    {
        if(errorOrNot1[i]==0)
        {
            rightShu1 = 0;//信息未填写完
            break;
        }
        if(errorOrNot1[i]==1)
        {
            rightShu1 = 1;//信息错误
            break;
        }
    }
    if(i==2)
        rightShu1 = 2;//信息正确
    //查询效果
    if(rightShu1 == 0)
        erro("请填写完整的信息");
        else if(rightShu1 == 1)
            erro("请填写正确的信息");
            else
            {
            var Obj2=new Object();
            Obj2.name=x[0].value;
            Obj2.id=x[1].value;                           
            if(bt.innerHTML == "查询")
            {
                $.ajax({
                url: 'http://localhost:3000/status',
                type: 'POST',
                dataType :'JSON',
                data:Obj2,
                xhrFields:   {'Access-Control-Allow-Origin': '*'}, //CORS跨域指定 + dataType
                success:function(data){
                        
                        console.log(data)
                        //4 表示没有报名
                        //返回数据按照数据库提示
                        is.style.width= "0";                
                        bt.innerHTML = "查询";
                        P.innerHTML = "请稍候";
                        cx.style.display = "none";
                        bt.innerHTML = "返回";
                        vb.style.display = "block";
                        judge(data.status);
                        animate(sta); 
                        tim = setInterval(function(){                   //状态提醒的动画函数
                        it.style.left = is.style.width;
                        if(is.style.width == a+"%")
                        {
                        P.innerHTML = stamsg;
                        clearInterval(tim);
                        }
                        },10); 
                          // `status` int(1) NOT NULL COMMENT '1:报名过,2:机考中,3:待面试,4:面试中;5:面试完成;6:过一面,7:一面未过；8:二面过;9:二面未过',

                },
                error:function(err){
                   //查询失败//进行提示
                }
            });

            }
            else
            {
                cx.style.display = "block";
                bt.innerHTML = "查询";
                vb.style.display = "none";
            }
        }   
    }

    x[0].onblur = function(){
        var flag=0;
        var img=findDiv[0].getElementsByTagName('img')[0];
        var p=findDiv[0].getElementsByTagName('p')[0];
        var nameExp = /^[\u4E00-\u9FA5]{2,20}$/;
        checktext1(img,p,!nameExp.test(this.value),flag);
    }
    x[1].onblur = function(){
        var img=findDiv[1].getElementsByTagName('img')[0];
        var p=findDiv[1].getElementsByTagName('p')[0];
        var flag=1;
        var stuNumExp = /^[0]\d[1][5-7]\d{4}$/;
        checktext1(img,p,!stuNumExp.test(this.value),flag);
    }
    
    //注册验证
    x[2].onblur=function()
    {
       var img=div[0].getElementsByTagName('img')[0];
       var p=div[0].getElementsByTagName('p')[0];
       var flag=2;
       var nameExp = /^[\u4E00-\u9FA5]{2,20}$/;
       checktext(img,p,!nameExp.test(this.value),flag);    
    }
    x[3].onblur=function()
    {
        var flag=3;
        var img=div[1].getElementsByTagName('img')[0];
        var p=div[1].getElementsByTagName('p')[0];
        var stuNumExp = /^[0]\d[1][5-7]\d{4}$/;
        checktext(img,p,!stuNumExp.test(this.value),flag);
    }

    x[6].onblur=function()
    {
        var flag=4;
        var img=div[2].getElementsByTagName('img')[0];
        var p=div[2].getElementsByTagName('p')[0];
        var classExp = /^[\u4E00-\u9FA5]{2,7}1[5-7][0-2]\d$/;
        checktext(img,p,!classExp.test(this.value),flag);
    }

    x[7].onblur=function()
    {
        var flag=5;
        var img=div[3].getElementsByTagName('img')[0];
        var p=div[3].getElementsByTagName('p')[0];
        var phoneexp = /^[1][3-9]\d{9}$/;
        checktext(img,p,!phoneexp.test(this.value),flag);
    }

    x[8].onblur=function()
    {
        var flag=6;
        var img=div[4].getElementsByTagName('img')[0];
        var p=div[4].getElementsByTagName('p')[0];
        var emailexp = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
        checktext(img,p,!emailexp.test(this.value),flag);
    }

   
    rePro.onclick = getImg;
    function getImg() {
        img.src = "http://localhost:3000/?t=" + Math.random();
    }

    //数据提交
    submit1.onclick=function(){
        for(var j=0;j<errorOrNot2.length;j++)
        {
            if(errorOrNot2[j]==0)
            {
                rightShu2 = 0;//信息未填写完
                break;
            }
            if(errorOrNot2[j]==1)
            {
                rightShu2 = 1;//信息错误
                break;
            }
        }
        if(j==5)
            rightShu2 = 2;//信息正确
        if(rightShu2==0)
            erro("请填写完整的信息");              //正则弹窗
            else if(rightShu2==1)
                erro("请填写正确的信息");                 //同上
                else
                {
                    checkCode();
                }
                    
    }
    
    //进行后台提交数据,完成注册
    Success=()=>{
        if(rightShu2==0)
        {
            erro("请填写完整的信息");           //不会执行  
        }
        else if(rightShu2==1)      
        {
            erro("请填写正确的信息");            //原因同上
        }
        else
        {

            var index = select1.selectedIndex; // 选中索引
            var text1 = select1.options[index].text; 
            var Obj=new Object();
            Obj.name=x[2].value;
            Obj.id=x[3].value;
            Obj.thclass=x[6].value;
            Obj.tel=x[7].value;
            Obj.email=x[8].value;
            Obj.direct=text1;

            console.log(Obj);   
           $.ajax({
                url: 'http://localhost:3000/sign',
                type: 'POST',
                dataType :'JSON',
                data:Obj,
                xhrFields:   {'Access-Control-Allow-Origin': '*'},
                success:function(data){
                        console.log(data);

                         if(data.status==1)
                        {
                            erro(errtext[0]);
                        }
                        else if(data.status==2)
                        {
                            erro(errtext[1]);
                        }
                        else if(data.status==3)
                        {
                            erro(errtext[2]);
                        } 
                        else if(data.status==4)
                        {
                            erro(errtext[3]);
                        }
                      },
                    error:function(err){
                        // console.log("err"+err);
                    }
            });
     
        }      
    }
    function erro(msg)          //弹出的提示层
        {
            clearInterval(timer2);
            op = 70;
            err.innerHTML = msg;
            err.style.display = "block";
        timer2 = setInterval(function er()
        {   
            op-=1;
            err.style.opacity = op/100;
            if(op == 0)
            {
                err.style.display = "none";
                clearInterval(timer2);
            }
        },30);
    }
    function checktext(img,p,index,flag)
    {
        var xiaBiao;
        xiaBiao = flag-2;
        if(index)
        {
            img.src='images/logo/x.png';
            p.innerHTML=printtext[flag];
            p.className='p-check-wrong';
            errorOrNot2[xiaBiao]=1;
        }
        else
        {
            img.src='images/logo/right.png';
            p.innerHTML='正确';
            p.className='p-check-right';
            errorOrNot2[xiaBiao] = 2;
        }
    }
    function checktext1(img,p,index,flag)
    {
        if(index)
        {
            img.src='images/logo/x.png';
            p.innerHTML=printtext[flag];
            p.className='p-check-wrong';
            errorOrNot1[flag]=1;
        }
        else
        {
            img.src='images/logo/right.png';
            p.innerHTML='正确';
            p.className='p-check-right';
            errorOrNot1[flag]=2;
        }
    }
     checkCode=()=>{
        var code = $('.checkcard').val();
        if(code==""){
            //显示验证码错误
            return;
        
        }
        var content = x[9];
        $.ajax({
            url: 'http://localhost:3000/check',
            type: 'GET',
            cache: false,
            dataType: 'jsonp',
            data: { 'data': content.value },
            jsonp: 'callback',
            jsonpCallback: 'handler',
            xhrFields: {
                withCredentials: true
            }, //设置发送cookie
            crossDomain: true,
            // success: handler,
            error: function(jq, err, text) {
                alert(err.message);
            }
        });
     }

     handler=(obj)=> {
        if (obj.status) {
            console.log("验证码输入成功");
            Success();
            getImg();
        } else {
            //提示验证码错误
            erro("验证码输入错误");
        }
    }
