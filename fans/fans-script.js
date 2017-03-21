$(document).ready(function(){

  /*== show sections ==*/ 

 var $matchList = $("ul").eq(1).children(),
     $targetList = $("#riv-description").children("p");
 
     $matchList.on("click",function(){
         
        var $this = $(this),
            data = $this.data("list");
            

           $targetList.each(function(i,elm){

               if(data == $(elm).attr("id"))
                  {   
                     if($(window).innerWidth() <= 520)
                         {
                             var dist =  distance(document.getElementById("riv-description"));                  
                             $("body,html").animate({scrollTop:dist},{duration:300});
                        }
                        $targetList.hide();
                        $(elm).fadeIn(500);  
                     $matchList.removeClass("clicked");
                     $this.addClass("clicked");
                     
                  }
           });
     });

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

          function distance(elm){
              var dim = elm.getBoundingClientRect();
              return dim.top;
          }

});