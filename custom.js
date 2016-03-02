$(function() {

    function resizeShowcase(){
        var showcaseWidth = $("#portfolio-showcase").width();
        var showcaseHeight = showcaseWidth * (360/640);
        $(".showcase").css({"width": showcaseWidth  + "px", "height": showcaseHeight  + "px"});
        $(".item>img").css({"height": (showcaseHeight-10)  + "px"});

    }

    $(resizeShowcase);
    $(window).resize(resizeShowcase);



    $(".scroll").click(function(event){     
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
     });




});


    /*
    //iframe
    var showcaseWidth = document.getElementsByClassName("presentation")[0].getElementWidth();
    var showcaseHeight = document.getElementsByClassName("presentation")[0].getElementHeight(); 
    document.getElementsByClassName("presentation").style.width = showcaseWidth + "px"; 
    var targetHeight = showcaseWidth * (360/640);
    document.getElementsByClassName("presentation").style.height = targetHeight + "px"; 


    document.getElementsByClassName("carouselHolder").style.width = showcaseWidth + "px";
    document.getElementsByClassName("carouselHolder").style.height = targetHeight + "px";
    //document.getElementsByClassName("button").style.left = showcaseWidth * 0.5  + "px";
    //document.getElementsByClassName("button").style.height = targetHeight + "px";
    */
/*
function initialState() {
    showcase();
    var params = "?wmode=transparent&autoplay=0&rel=0&showinfo=0&autohide=1&color=white";
    document.getElementsByClassName("presentation").src = "http://www.youtube.com/embed/kmEs-sFpi2Q"  + params;

}*/
