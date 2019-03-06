window.onload = function() {
    var li_img = document.getElementsByClassName('li');//取到轮播图img
    var ul = document.getElementById('ul');
    var list1 = document.getElementById('list1');//
    var list2 = document.getElementById('list2');
    var industry_new = document.getElementById('industry-new');
    var com_new = document.getElementById('com-new');
    var hr_4 = document.getElementById('hr4');
    var isgo = true;//跑动方向
    var count = 0;//定义跑动的次数
    var timer;//定义计时器对象
    var buttons = document.getElementsByClassName('buttons');
    show();//定义计时器，自动轮播
    function show() {
        timer = setInterval(function() {
            if(isgo === true) {
                count ++;
                ul.style.transform = "translate("+ -1349 * count +"px)";
                if(count >= li_img.length - 1) {
                    count = li_img.length - 1;
                    isgo = false;
                }
            }else {
                count --;
                ul.style.transform = "translate("+ -1349 * count +"px)";
                if(count <= 0) {
                    count = 0;
                    isgo = true;
                }
            }
            for(var i = 0; i < buttons.length; i++) {
                buttons[i].style.backgroundColor = "#FF5A5A";
            }
            buttons[count].style.backgroundColor = "#F81D1D";
        },4000); 
    };
    for(i = 0; i < buttons.length; i ++) {
        buttons[i].onmouseover = function() {
            clearInterval(timer);
        }
    }
    industry_new.onclick = function () {
        list1.style.display = 'none';
        list2.style.display = 'inline';
        list2.style.marginTop = '240px';
        this.style.color = '#000';
        com_new.style.color = '#ADACAC';
        hr_4.style.marginLeft = '193px';
    };
    com_new.onclick = function () {
        list1.style.display = 'inline';
        list2.style.display = 'none';
        list2.style.marginBottom = '240px';
        this.style.color = '#000';
        industry_new.style.color = '#ADACAC';
        hr_4.style.marginLeft = '12px';
    };
}