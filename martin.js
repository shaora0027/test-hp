$(function(){
    $(".slideshow-zoom li").css({"position":"relative"});
    $(".slideshow-zoom li").hide().css({"position":"absolute","top":0,"left":0});
    setInterval(function(){
      var $active = $(".slideshow-zoom li.zoom");
      var $next = $active.next("li").length?$active.next("li"):$(".slideshow-zoom li:first");
      $active.fadeOut(2000).removeClass("zoom");
      $next.fadeIn(2000).addClass("zoom");
    },2000);

    $(".main3-li1").click(function(){
        $(".active-ul1").toggleClass("open")
    });
    $(".main3-li2").click(function(){
        $(".active-ul2").toggleClass("open")
    });
    $(".main3-li3").click(function(){
        $(".active-ul3").toggleClass("open")
    });
    $(".main3-li4").click(function(){
        $(".active-ul4").toggleClass("open")
    });
    $(".main3-li5").click(function(){
        $(".active-ul5").toggleClass("open")
    });
    $(".main3-li6").click(function(){
        $(".active-ul6").toggleClass("open")
    });



  });