window.onload = function() {
    var list1 = document.getElementById('list1');
    var list2 = document.getElementById('list2');
    var industry_new = document.getElementById('industry-new');
    var com_new = document.getElementById('com-new');
    var hr_4 = document.getElementById('hr4');
    //var isgo = true;
    industry_new.onclick = function () {
        list1.style.display = 'none';
        list2.style.display = 'inline';
        list2.style.marginTop = '240px';
        this.style.color = '#000';
        com_new.style.color = '#ADACAC';
        //hr_4.style.right = 69 + 'px';
    };
    com_new.onclick = function () {
        list1.style.display = 'inline';
        list2.style.display = 'none';
        list2.style.marginBottom = '240px';
        this.style.color = '#000';
        industry_new.style.color = '#ADACAC';
        //hr_4.style.right = -69 + 'px';
    }
}