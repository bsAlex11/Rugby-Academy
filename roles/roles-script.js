$(document).ready(function(){

    /*== back to top button ==*/

      var $toTop = $("#toTop");
      var $window = $(window);
      $window.on("scroll",function(){

          if($window.scrollTop() > 150 )
            $toTop.fadeIn();
           else 
            $toTop.fadeOut(); 
      });
     $toTop.on("click",function(){
       
        $("body,html").animate({scrollTop:0},{duration:300});
     });  

      
      //*== drop down menu ==*//

      var $button = $("#hamburger-menu");
      var $menu = $("ul").first();
        
        $button.on("click",function(){
            $menu.slideToggle(); 
        });



});