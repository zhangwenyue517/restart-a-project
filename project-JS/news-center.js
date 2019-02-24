window.onload = function() {
    var display = document.getElementsByClassName('display');
    var li = document.getElementsByClassName('li');
    var img = document.getElementsByClassName('img-div');
    for(var i=0;i<li.length;i++) {
        if(i%2==0) {
            display.style.marginLeft = "-718px";
            img.style.marginRight = "-698px";
        }
    }
}