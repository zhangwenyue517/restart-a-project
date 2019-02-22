window.onload = function() {
    var list1 = document.getElementById('list1');
    var list2 = document.getElementById('list2');
    var industry_new = document.getElementById('industry-new');
    //var com_new = document.getElementById('com-new');
    industry_new.onclick = function () {
        list2.style.display = 'inline';
        list1.style.display = 'none';
        list2.style.marginTop = '240px';
    };
}