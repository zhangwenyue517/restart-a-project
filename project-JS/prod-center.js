window.onload = function() {
    var btn1 = document.getElementById('btn1');
    var btn2 = document.getElementById('btn2');
    var btn3 = document.getElementById('btn3');
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