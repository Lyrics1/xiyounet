window.onload=function(){
	var link =$('.a');
	// alert(link.length)
	link[0].onclick=function(){
		window.open("../web/6/index.html",false)
	}
	link[1].onclick=function(){
	
		window.open("../web/7/index.html",false)
	}
	link[2].onclick=function(){
		window.open("../web/8/index.html",false)
	}
	link[3].onclick=function(){
		window.open("../web/9/index.html",false)
	}
	link[4].onclick=function(){
		window.open("../web/10/index.html",false)
	}
	var One = document.getElementsByClassName('onee')[0];
	var Two= document.getElementsByClassName('onee')[1];
	var  Three= document.getElementsByClassName('onee')[2];
	var  Four= document.getElementsByClassName('onee')[3];
	var  Five= document.getElementsByClassName('onee')[4];
	var hide =document.getElementsByClassName('hide color1')[0];
	var hidet =document.getElementsByClassName('hide color2')[0];
	var hidett =document.getElementsByClassName('hide color3')[0];
	var hidef =document.getElementsByClassName('hide color4')[0];
	var hideff =document.getElementsByClassName('hide color5')[0];
	
	

	var one = document.getElementsByClassName('one')[0];
	var two = document.getElementsByClassName('one')[1];
	var three = document.getElementsByClassName('one')[2];
	var four = document.getElementsByClassName('one')[3];
	var five = document.getElementsByClassName('one')[4];
	
	var oneIcon = document.getElementsByClassName('fa fa-file-video-o fa-3x fa-self')[0];
	var oneIcont = document.getElementsByClassName('fa fa-file-video-o fa-3x fa-self')[1];
	var oneIcontt = document.getElementsByClassName('fa fa-file-video-o fa-3x fa-self')[2];
	var oneIconf = document.getElementsByClassName('fa fa-file-video-o fa-3x fa-self')[3];
	var oneIconff = document.getElementsByClassName('fa fa-file-video-o fa-3x fa-self')[4];
	





	One.onmouseover=function(){
		
		$(hide).removeClass('color1');
		$(one).addClass('color');
		$(oneIcon).removeClass('fa-self').addClass('Iconcolor');

	}
	One.onmouseout = function(){
		$(hide).addClass('color1');
		$(one).removeClass('color');
		$(oneIcon).removeClass('Iconcolor').addClass('fa-self');
	}

	Two.onmouseover=function(){
		
		$(hidet).removeClass('color2');
		$(two).addClass('color');
		$(oneIcont).removeClass('fa-self').addClass('Iconcolor');

	}
	Two.onmouseout = function(){
		$(hidet).addClass('color2');
		$(two).removeClass('color');
		$(oneIcont).removeClass('Iconcolor').addClass('fa-self');
	}
	Three.onmouseover=function(){
		
		$(hidett).removeClass('color3');
		$(three).addClass('color');
		$(oneIcontt).removeClass('fa-self').addClass('Iconcolor');

	}
	Three.onmouseout = function(){
		$(hidett).addClass('color3');
		$(three).removeClass('color');
		$(oneIcontt).removeClass('Iconcolor').addClass('fa-self');
	}
	Four.onmouseover=function(){
		
		$(hidef).removeClass('color4');
		$(four).addClass('color');
		$(oneIconf).removeClass('fa-self').addClass('Iconcolor');

	}
	Four.onmouseout = function(){
		$(hidef).addClass('color4');
		$(four).removeClass('color');
		$(oneIconf).removeClass('Iconcolor').addClass('fa-self');
	}
	Five.onmouseover=function(){
		
		$(hideff).removeClass('color5');
		$(five).addClass('color');
		$(oneIconff).removeClass('fa-self').addClass('Iconcolor');

	}
	Five.onmouseout = function(){
		$(hideff).addClass('color5');
		$(five).removeClass('color');
		$(oneIconff).removeClass('Iconcolor').addClass('fa-self');
	}
	



	var next = document.getElementById('next');
	var show = document.getElementsByClassName('show')[0];
	// var shownext = document.getElementsByClassName('show')[1];
	// shownext.style.display="none"

	next.onclick=function(){
		$(show).animate({width: 'toggle'},5000);
			// $(shownext).animate({width: 'toggle'},10000);
			setTimeout(function(){
				window.location.href="indexb.html"
			}, 10000)
				
	}

	function addscript (url){
		var script = document.getElementsByTagName('script')[0];
		script.src = url;  
		// var script = document.createElement('script');
		//  script.type = "text/javascript";
  //       		script.src = url;        	
  //       		document.body.appendChild(script);
	}
	var play = document.getElementById('video');
	var video = document.getElementsByTagName('video')[0];
	var source = document.getElementsByTagName('source')[0];
	One.onclick=function(){	
		console.log(source.src)
		source.src="../video/陈奕迅 - 让我留在你身边.mp4"
		console.log(source.src)
		$(play).fadeIn();
		Play();	
	}
	Two.onclick=function(){	
		$(play).fadeOut();
		$("#videoa").fadeIn();
		Play();	
		$("#videoa").click(function(e){
			// alert("1")
			 e = e || window.event;
	        	var dom = e.srcElement || e.target;
	        	e.stopPropagation();
	        	// alert(dom.id)
	        	if(dom.id=="videobox"){
			$("#starta").hide();
			starta();
		}
		});

	}
	Three.onclick=function(){	
		
		$(play).fadeOut();
		$("#videob").fadeIn();
		Play();	
		$("#videob").click(function(e){
			
			 e = e || window.event;
	        	var dom = e.srcElement || e.target;
	        	e.stopPropagation();
	        	// alert(dom.id)
	        	if(dom.id=="videobox"){
			$("#startb").hide();
			startb();
		}
		});
	}
	Four.onclick=function(){	
		$(play).fadeOut();
		$("#videoc").fadeIn();
		Play();	
		$("#videoc").click(function(e){
			
			 e = e || window.event;
	        	var dom = e.srcElement || e.target;
	        	e.stopPropagation();
	        	// alert(dom.id)
	        	if(dom.id=="videobox"){
			$("#startc").hide();
			startc();
		}
		});
	}
	Five.onclick=function(){	
		$(play).fadeOut();
		$("#videod").fadeIn();
		Play();	
		$("#videod").click(function(e){
			
			 e = e || window.event;
	        	var dom = e.srcElement || e.target;
	        	e.stopPropagation();
	        	// alert(dom.id)
	        	if(dom.id=="videobox"){
			$("#startd").hide();
			startd();
		}
		});
	}

	var judge = true;
	$("#start").click(function(){
			start();
	})
	play.onclick=function(e){
		 e = e || window.event;
	        	var dom = e.srcElement || e.target;
	        	e.stopPropagation();
	        	// alert(dom.id)
	        	if(dom.id=="videobox"){
			$("#start").hide();
			start();
		}
	}

	function Play(){
		
		var judge = true;
		
	}
	function start(){
		if(judge==true)
			{
				video.play();
				judge = ! judge;
				$("#start").hide();
			}
			else{
				video.pause();
				judge = !judge;
				$("#start").show();

			}
	}var videoa = document.getElementsByTagName('video')[1];
	function starta(){
		
		if(judge==true)
			{
				videoa.play();
				judge = ! judge;
				$("#starta").hide();
			}
			else{
				videoa.pause();
				judge = !judge;
				$("#starta").show();

			}
	}var videob = document.getElementsByTagName('video')[2];
	function startb(){
		
		if(judge==true)
			{
				videob.play();
				judge = ! judge;
				$("#startb").hide();
			}
			else{
				videob.pause();
				judge = !judge;
				$("#startb").show();

			}
	}var videoc = document.getElementsByTagName('video')[3];
	function startc(){
		
		if(judge==true)
			{
				videoc.play();
				judge = ! judge;
				$("#startc").hide();
			}
			else{
				videoc.pause();
				judge = !judge;
				$("#startc").show();

			}
	}var videod = document.getElementsByTagName('video')[4];
	function startd(){
		
		if(judge==true)
			{
				videod.play();
				judge = ! judge;
				$("#startd").hide();
			}
			else{
				videod.pause();
				judge = !judge;
				$("#startd").show();

			}
	}
	$("#close").click(function(){
		$(play).fadeOut();
		video.pause();
		
	});
	$("#closea").click(function(){
		$("#videoa").fadeOut();
		videoa.pause();
		
	});
	$("#closeb").click(function(){
		$("#videob").fadeOut();
		videob.pause();
		
	});
	$("#closec").click(function(){
		$("#videoc").fadeOut();
		videoc.pause();
		
	});
	$("#closed").click(function(){
		$("#videod").fadeOut();
		videod.pause();
		
	});
	$("#all").click(function(){
		video.webkitRequestFullScreen();
	})
	$("#alla").click(function(){
		videoa.webkitRequestFullScreen();
	})
	$("#allb").click(function(){
		videob.webkitRequestFullScreen();
	})
	$("#allc").click(function(){
		videoc.webkitRequestFullScreen();
	})
	$("#alld").click(function(){
		videod.webkitRequestFullScreen();
	})
}