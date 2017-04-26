 changeScreen();

 window.addEventListener("resize", changeScreen);

 function changeScreen() {
     var hHTML, hHeadear, info, infoText;
     hHTML = window.innerHeight;
     hHeadear = document.getElementById('header').clientHeight;
     info = document.getElementById('info');
     infoText = document.getElementById('infoText');
     info.setAttribute("style", "height: " + (hHTML - hHeadear) + "px;");
 }

$(document).ready(function(){
    $(".menuTaggle").on("click",function(){
        $('.headerMenu li:gt(0)').slideToggle(400, function(){
            if($(this).css("display") === "none"){
                $(this).removeAttr('style');
            }
        });
    });  
});