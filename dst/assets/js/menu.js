/*
Making a dropdown menu
*/

window.onload = function ul(){

    
    let url = window.location.pathname;
    let className = url.substring(url.lastIndexOf('/')+1);
    let charsP = className.lastIndexOf('.');
    let myId = className.substring(0, charsP );
    myId = myId.replace(/ /g,'');
    if(myId == null || myId.length<=1){
        myId = "index";
    }
    
    if(myId != null){
        console.log(myId);
        let d = document.getElementById(myId);
        if(d !=null ){
            d.classList.add("activeOne");
        }
        if($(window).width() < 480){
            $('.dropDown li').toggle( "slow", function(){
                $(".activeOne").css("display", "block");
            });
        }
    }
}

window.onresize = function(){
    if($(window).width() < 480){
        $("#hamburger").css("display", "inline");
        $('.dropDown li').css("display", "none");
        $(".activeOne").css("display", "block");
        
    }
    else{
        $("#hamburger").css("display", "none");
        $('.dropDown li').css("display", "block");
        $(".activeOne").css("display", "block");
    }
}


$(function(){
    $("#hamburger").click(function(e){
       $('.dropDown li').toggle( "slow", function(){
        $(".activeOne").css("display", "block");
       });
        
       //e.preventDefault();
        
    });
   
   
});