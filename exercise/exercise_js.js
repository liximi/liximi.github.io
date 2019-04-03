function myfunc(a) {
    if (document.getElementById(a).style.visibility === 'visible') {
        document.getElementById(a).style.visibility = 'hidden';
    }
    else {
        document.getElementById(a).style.visibility = 'visible';
    }
};
let flag = 0;
function myfunc1(a) {
    if(document.getElementById(a).innerHTML === '点击次数为单数')
    {
        document.getElementById(a).innerHTML = '点击次数为双数';
    }
    else{
        document.getElementById(a).innerHTML = '点击次数为单数';
    }
    flag++;
    myfunc2();
}

function myfunc2() {
    var para = document.createElement("p");
    var node = document.createTextNode("点击"+flag+"次！");
    para.appendChild(node);

    var element = document.getElementById("bot1");
    element.appendChild(para);
}