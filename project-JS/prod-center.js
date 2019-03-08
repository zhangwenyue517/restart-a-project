window.onload = function() {
    var btn1 = document.getElementById('btn1');
    var btn2 = document.getElementById('btn2');
    var btn3 = document.getElementById('btn3');
    var img_intro = document.getElementsByClassName('img-intro');
    var ul = document.getElementById('ul');
    var isgo = true;//定义跑动方向
    var count = 0;//定义跑动次数
    var timer;//定义计时器对象
    show();//定义计时器，自动轮播
    function show() {
        timer = setInterval(function () {
            if(isgo == true) {
                count ++;
                ul.style.transform = "translate("+ -264 * count +"px)";
                if(count >= img_intro.length - 4) {
                    count = img_intro.length - 5;
                    isgo = false;
                }
            }else {
                count --;
                ul.style.transform = "translate("+ -264 * count +"px)";
                if(count <= 0) {
                    count = 0;
                    isgo = true;
                }
            }
        }, 4000);
    }
    btn1.onclick = function() {
        btn2.style.color = '#FFF';
        btn2.style.backgroundColor = 'transparent';
        btn1.style.backgroundColor = '#E77070';
        btn3.style.color = '#FFF';
        btn3.style.backgroundColor = 'transparent';
    }
    btn2.onclick = function() {
        btn1.style.color = '#FFF';
        btn1.style.backgroundColor = 'transparent';
        btn2.style.backgroundColor = '#E77070';
        btn3.style.color = '#FFF';
        btn3.style.backgroundColor = 'transparent';
    }
    btn3.onclick = function() {
        btn1.style.color = '#FFF';
        btn1.style.backgroundColor = 'transparent';
        btn3.style.backgroundColor = '#E77070';
        btn2.style.color = '#FFF';
        btn2.style.backgroundColor = 'transparent';
    }
}