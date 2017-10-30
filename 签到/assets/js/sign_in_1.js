window.onload=function(){
	//  alert("tag:"+tag);
	// var oimg=new Image();
	 var oa=document.getElementById("file");
	 var oinput=document.getElementsByTagName("input");
	 var obtn=document.getElementsByTagName("button");
	 var op=document.getElementsByTagName("p");
	 var oimg=document.getElementsByTagName("img");
	 var oform=document.getElementsByTagName("form")[0];
     var ob=byclass("b","div");
     var img_url;
	 var tag=0;
	
	 //定义正则表达式来检测输入
	 var pattern=new Array();

	 var sign=[0,0,0,0,0,0,0,0];  //标志是否输入  0为没输入
	 pattern[1]=new RegExp("^[\\u4e00-\\u9fa5]{1,}$");  //检测姓名是否为汉字
	 pattern[2]=new RegExp("^\\d{8}$");   //检测输入为8位数字
     pattern[5]=new RegExp("^[\\u4e00-\\u9fa5]{1,}$");        //检测学院
     pattern[4]=new RegExp("^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0-9]|17[0|1|6|7|8])\\d{8}$");  //检测手机号
     pattern[3]=new RegExp(/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-za-z0-9_-])+/);   //检测邮箱
     pattern[6]=new RegExp("^[\\u4E00-\\u9fa5]+\\d{4}$");   //检测专业班级  
     console.log("img"+oimg.length); 
     console.log("a:"+oa.length);
	 console.log("input"+oinput.length);
	 console.log("obtn:"+obtn.length);
	 console.log("op:"+op.length);
	 console.log(typeof otip);
	 //检查是否输入照片 
	 	oinput[0].onchange=function read(){
		var file=oinput[0].files[0];
		var reader=new FileReader();
		reader.readAsDataURL(file);
		reader.onload=function(e){
             oimg[1].src=e.target.result;
             img_url=e.target.result;
             obtn[1].disabled=false;
			obtn[1].id="";
            //  alert(img_url);
             // var img=new Image();
             // img.src=img_url;
             // alert(img.width);
             // alert(img.height);
            //  if(img.width==295 && img.height==413){
                       op[0].innerHTML="";
                      // obtn[1].disabled=false;
                       if(sign[0]==0){
                       	  tag++;
						   sign[0]=1;
                       }
                      
             // }
            
           /*   else{
              	op[0].innerHTML="*照片必须是295*413的格式";
              	obt[1].disabled=true;
              }*/
             
		}

	}
	 //检测输入验证码
     oinput[oinput.length-1].onblur=function(){
	 var str=oinput[oinput.length-1].value.replace(/\s/,'');
	 if(str.length==0){
	 	op[oinput.length-1].parentNode.parentNode.className="form-group has-error";
		op[oinput.length-1].innerHTML="*请输入验证码";
		obtn[1].disabled=true;
		 obtn[1].id="dis";
	   }else{
	   	   op[oinput.length-1].parentNode.parentNode.className="form-group has-success";
		   op[oinput.length-1].innerHTML="";
		   obtn[1].disabled=false;
		 obtn[1].id="";
		   if(sign[oinput.length-1]==0){
		      	tag++;
		   	sign[oinput.length-1]=1;
		   }
	}
	console.log("tag:"+tag);
   }	
	 //检查表单的其他输入
	 for(var i=1;i<oinput.length-1;i++){
	 	 oinput[i].index=i;
	 	 oinput[i].onblur=function(){
	 	 var str=oinput[this.index].value.replace(/\s/,'');
		if(!(pattern[this.index].test(str))){
			if(str.length==0){
				op[this.index].innerHTML="*输入不能为空";
		    }else{
				op[this.index].innerHTML="*格式不正确,请重新输入";

				
			}
			   op[this.index].parentNode.parentNode.className="form-group has-error";
			   obtn[1].disabled=true;
			   obtn[1].id="dis";
			}else{
				op[this.index].innerHTML="";
				obtn[1].disabled=false;
			    obtn[1].id="";
				op[this.index].parentNode.parentNode.className="form-group has-success";
				if(sign[this.index]==0){
					tag++;
					sign[this.index]=1;
				}
				console.log("tag:"+tag);
            }
	 	 }
	 }
	 
	//检查输入是否合法
	obtn[1].onclick=function check(){
		
		if(oinput[0].value==""){
			op[0].innerHTML="*照片不能为空";
			
		}else{
			if(sign[0]==0){
				tag++;
				sign[0]=1;
			}

		}
		if(oinput[oinput.length-1].value==""){
			 op[oinput.length-1].innerHTML="*请输入验证码";
			 
		}else{
			if(sign[oinput.length-1]==0){
				 tag++;
				}
		}
		for(var i=1;i<oinput.length-1;i++){
	 	  var str=oinput[i].value.replace(/\s/,'');
	 	 
        
		if(!pattern[i].test(str)){
				op[i].innerHTML="*输入不能为空";
				this.disabled=true;    //禁止表单提交
			    obtn[1].id="dis";
			 
		}else{
				op[i].innerHTML="";
				if(sign[i]==0){
					tag++;
					sign[i]=1;
				}
				this.disabled=false;
			obtn[1].id="";
			}
	 }
   		if(tag==oinput.length){
   			 alert("tag:"+tag);
              alert("s");
			//  window.location="../index.html";
			 this.disabled=false;      //如果输入全部正确时,提交按钮可操作
			obtn[1].id="";
		}else{
			 this.disabled=true;
			obtn[1].id="dis";
			 alert("tag:"+tag); 
			 return false;
		}
	
}
 //提交表单后执行提示报名成功 
   /* oform.onsubmit=function(){
    	 ob[0].className="current";
    	 alert("成功！");
    }*/
	//根据class寻找相应的节点
	function byclass(sclass,obj){
		 var pat=new RegExp("(^| )" + sclass + "( |$)");
		// alert(typeof pattern);
		 var arr=[];
		 var a=document.getElementsByTagName(obj);
		// alert("a.length:"+a.length);
		 for(var i=0;i<a.length;i++){
		 	//console.log("className:"+a[i].className);
		 	  if(pat.test(a[i].className)){
		 	  	 arr.push(a[i]);
		 	  }
		 }
		 return arr;
  }
}
