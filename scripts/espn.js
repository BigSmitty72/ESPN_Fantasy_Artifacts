$(function () {
setTimeout(function() {
    document.getElementsByClassName('ob-first')[0].hide();}, 4000);
    document.getElementById('content').getElementsByClassName('games-ad300')[0].innerHTML = "<BR><BR><BR><BR><BR><BR><BR><BR><BR><BR><BR><BR><BR><BR><BR><BR><BR><BR><BR><BR><BR>";
    document.getElementById('content').getElementsByClassName('games-ad300')[0].style.backgroundImage = "url('http://www.mywebsite.com/SideBarPic.jpg')";
    document.getElementById('content').getElementsByClassName('games-ad300')[0].style.backgroundSize = "100% auto";document.getElementsByClassName('alertcontainer alerttiltcontainer')[0].innerHTML="";
    document.getElementsByClassName('alertcontainer alerttiltcontainer')[0].className="fuckAds";
    $( ".lm-note-body" ).prepend("<div id='hs_chart'></div>");
});