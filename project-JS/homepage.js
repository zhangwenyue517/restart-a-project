var count = 0;//定义跑动的次数
var isgo = false;//定义动画的执行方向
var timer;//定义计时器对象
window.onload = function() {
    var ul = document.getElementById("second").getElementsByTagName("ul");//获取ul元素
    var li = ul.getElementsByTagName("li");//获取li元素
    var btn = document.getElementById("btn");
    var buttons = btn.getElementsByClassName("buttons");//获取所有按钮元素
    //定义计时器，自动轮播
    showtime();
    function showtime() {
        timer = setInterval(function() {
            if(isgo == false) {
                count++;
                ul.style.transform = "translate("+ -1366 * count + "px)";
                if(count >= li.length - 1) {
                    count = li.length - 1;
                    isgo = true;
                }
            }else {
                count--;
                ul.style.transform = "translate("+ -1366 * count + "px)";
                if(count <= 0) {
                    count = 0;
                    isgo = false;
                }
            }
            for(var i = 0; i < on.length; i++) {
                buttons[i].style.backgroundColor = "#f81d1d";
            }
            buttons[count].style.backgroundColor = "#ff5a5a";
        }, 4000);
    }
    //整个容器中鼠标悬停停止，离开恢复自动轮播
    container.onmousemove = function() {
        clearInterval(timer);
    }
    container.onmouseleave = function() {
        showtime();
    }
}