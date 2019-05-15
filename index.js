function backTop(){
    window.location.href='#home';
}

$(document).ready(function(){
    $("#circle").hide();
    $(window).scroll(function(){
        if($(document).scrollTop() >= 500){
            $("#circle").fadeIn(500);
        } else {
            $("#circle").fadeOut(500);
        }
    })
})