//定义一个用id获取元素的方法，减少工作量！
function getId(tag) {　　
         return document.getElementById(tag);
}

//大图显示的onclick函数
var s_total="pho_1";
var b_total="";
b_total = "b_"+s_total;
function pho_show(pho_id) {
	getId(s_total).style.display="none";
	s_total = pho_id;
	b_total = "b_"+s_total;
	getId(pho_id).style.display="block";
	
}

// //放大镜函数,onload函数是在页面加载完后执行一次(仅此一次)
window.onload=function() {
	var pho = getId("photos");
	var mirr = getId("mirror");

     //当鼠标悬浮在放大区时的作用函数
	mirr.onmouseover = function() {
		var big_img = getId(b_total);
		var enlarge = getId(s_total).children[1];
	    var small_img = getId(s_total).children[0];

		small_img.style.opacity="0";
		big_img.style.display="block";
		enlarge.style.display="block";	
	}

	//当鼠标离开放大区时的作用函数
	mirr.onmouseout = function() {
		var big_img = getId(b_total);
		var enlarge = getId(s_total).children[1];
	    var small_img = getId(s_total).children[0];

		enlarge.style.display="none";
		small_img.style.opacity="1";
		big_img.style.display="none";
	}

	//当鼠标在放大区移动时的作用函数
	mirr.onmousemove = function(event) {
		var big_img = getId(b_total);
		var enlarge = getId(s_total).children[1];
	    var small_img = getId(s_total).children[0];

		var e = event || window.event;  //兼容多个浏览器
		var left = e.clientX-pho.offsetLeft-mirr.offsetLeft-enlarge.offsetWidth/2;
		var top  = e.clientY-pho.offsetTop-mirr.offsetTop-enlarge.offsetHeight/2;

		//为放大区设置边界
		if(left<0)
			left = 0;
		else if(left>(mirr.offsetWidth-enlarge.offsetWidth))
			left = mirr.offsetWidth-enlarge.offsetWidth;

		if(top<0)
			top = 0;
		else if(top>(mirr.offsetHeight-enlarge.offsetHeight))
		    top=mirr.offsetHeight-enlarge.offsetHeight;

		enlarge.style.left=left+"px";
		enlarge.style.top=top+"px";
	
		var x_size = (big_img.children[0].offsetWidth)/(mirr.offsetWidth);
		var y_size = (big_img.children[0].offsetHeight)/(mirr.offsetHeight);


		var relativeX = left;
        var relativeY = top;
		big_img.style.marginLeft = (-relativeX *x_size)*(63/70)+"px";
		big_img.style.marginTop = (-relativeY *y_size)*(772/885)+"px";
	}
}