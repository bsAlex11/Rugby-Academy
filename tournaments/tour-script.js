$(document).ready(function(){

 /*== show tournament on click ==*/

  var $startList = $("#tours").children();
  var $targetList = $("#tour-details").children();
  
      $startList.on("click",showDiv);

      function showDiv(event){

           var $this = $(this);
           var data = $this.data("name");
           
          $startList.find("img").not($this.find("img")).removeClass("clicked"); 
          $startList.find("p").css("color","black");

           $targetList.each(function(index,elem){
            
               if (data == $(this).attr("id"))
                 { 
                     $targetList.hide();
                     $(this).show();
                     var toScroll = location(this);
                     $("body,html").animate({scrollTop : toScroll},{duration:500});
                 } 
           });
            $this.find("img").addClass("clicked"); 
            $this.find("p").css("color","#d1c792");
      }

         function location(elem){
             var dims = elem.getBoundingClientRect();
             return dims.top;
         } 
         
      
       /*== back to top ==*/

       var $window = $(window);
       var $toTop = $("#toTop");

        $window.on("scroll",function(){

              if ($(this).scrollTop() > 150 )
                 $toTop.fadeIn();
                else 
                 $toTop.fadeOut();  
        });
        $toTop.on("click",function(){
            
            $("body,html").animate({scrollTop:0},{duration:500});
        }); 


        /*== show menu ==*/

        var $menuButton = $("#hamburger-menu"),
            $menu = $("ul").first();

            $menuButton.on("click",function(){
                 
                 $menu.slideToggle();
            });

});    