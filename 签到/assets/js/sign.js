window.onresize=function(){	

change();

}

window.onload=function(){

	var enter=document.getElementsByTagName('input');
    var start;
    var data;
    var tag=0;
    var oend;
	enter[2].onclick=function(){
		if(enter[2].value=="签到")
		{
			var c=judge(enter);
            if(c==true) {
                enter[2].value == "签到" ? enter[2].value = "下线" : enter[2].value = "签到";
               // enter[0].value = "";
              //  enter[1].value = "";
                enter[1].disabled = true;
                enter[0].disabled = true;
                $.ajax({
                    url: "assets/start.php",
                    type: 'GET',
                    async: true,
                    cache:false,
                    dataType: 'text',
                    success: function (date) {
                        start = date;
                        console.log(start);
                    },
                    error: function () {
                        alert("失败！");

                    }
                });

            }

		}
	/*	else {

			c=true;
			document.location.reload()

		}*/


               /*  enter[0].placeholder = "已经签到";
                 enter[1].placeholder = "已经签到";*/

          else if(enter[2].value=='下线'){

            if(!tag) {
                $.ajax({
                    url: "assets/start.php",
                    type: 'GET',
                    cache: false,
                    async: true,
                    dataType: 'text',

                    success: function (date) {
                       oend = date;
                     data={
                         username:enter[0].value,
                         id:enter[1].value,
                         start:start,
                		     end:oend
                      };
                    $.ajax({
                          type: 'POST',
                          url: "assets/sign.php",
                          async: true,
                          cache: false,
                          traditional: true,
                    
                          data: data,
                          success: function (data) {
                              alert(data);

                              enter[2].disabled=true;

                          },
                          error: function () {
                              alert("签到失败!");


                           }

                });
                    },
                    error: function () {
                        alert("签到失败！");
                    }

                });

            }
         }



	}
	enter[0].onmousedown=function(){
		enter[0].style.border="1px solid #5bc0de";
		enter[0].placeholder="姓名";


	}
	enter[1].onmousedown=function(){
		enter[1].style.border="1px solid #5bc0de";
		enter[1].placeholder="学号";
	}
	change();


}
function change(){
	var pass=document.getElementById("username");
	var enter=document.getElementById('enter');
	enter.style.width=pass.clientWidth+"px";
//	window.body.background.opaticy=0.5;
}
function judge(enter){

 if(enter[0].value=="" || enter[1].value==" ")
	{

		enter[0].value="";
		enter[0].placeholder="输入不能为空";
		enter[1].placeholder="输入不能为空";
		enter[0].style.border="1px solid red";
		enter[1].style.border="1px solid red";
		return false;
	}
else if((/[^\u4E00-\u9FA5]/g).test(enter[0].value))
{
		enter[0].value="";

		enter[0].placeholder="输入格式有误";

		enter[0].style.border="1px solid red";

		return false;

	// enter[0].style.color="red";
	// enter[0].value="请注意输入格式";
}
else if((/[^\d]{2,}/g).test(enter[1].value) || enter[1].value.length!=8)
{
	enter[1].value="";

	enter[1].placeholder="输入格式有误";
	enter[1].style.border="1px solid red";

	return false;
}
else return true;
}

