window.onload = function() {
    var btn1 = document.getElementById('btn1');
    var btn2 = document.getElementById('btn2');
    var btn3 = document.getElementById('btn3');
    var img_div = document.getElementsByClassName('img-div');
    var display = document.getElementsByClassName('display');
    var i = img_div.length;
    var a = display.length;
    btn1.onclick = function() {
        btn2.style.color = '#FFF';
        btn2.style.backgroundColor = 'transparent';
        btn1.style.color = '#000';
        btn1.style.backgroundColor = '#FFF';
        btn3.style.color = '#FFF';
        btn3.style.backgroundColor = 'transparent';
    }
    btn2.onclick = function() {
        btn1.style.color = '#FFF';
        btn1.style.backgroundColor = 'transparent';
        btn2.style.color = '#000';
        btn2.style.backgroundColor = '#FFF';
        btn3.style.color = '#FFF';
        btn3.style.backgroundColor = 'transparent';
    }
    btn3.onclick = function() {
        btn1.style.color = '#FFF';
        btn1.style.backgroundColor = 'transparent';
        btn3.style.color = '#000';
        btn3.style.backgroundColor = '#FFF';
        btn2.style.color = '#FFF';
        btn2.style.backgroundColor = 'transparent';
    }
    if(i % 2 == 0) {
        img_div[i].style.marginLeft = '698px';
        display[a].style.marginRight = '718px';
    }
}