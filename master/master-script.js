 $(document).ready(function(){


var $courseList = $(".courses");
var $descriptions = $(".description");
var $toTop = $("#toTop");
var $window = $(window);

          /*== show back to top button and scroll top animation ==*/

   $window.on("scroll",function(e){

          if( $(this).scrollTop() > 150 )
            $toTop.fadeIn();
           else 
             $toTop.fadeOut(); 
   });

     $toTop.on("click",function(event){

         $("body,html").animate({scrollTop : 0},{duration : 500}); 
     });    


    /* show the clicked course*/

$courseList.on("click",showText);

  function showText(event){

      var $this = $(this);
      var identifier = $this.attr("id");
      
       $descriptions.each(function(index){
           var $data = $(this).data("section");
           
             if(identifier == $data)
               {  $descriptions.hide();
                   $(this).show();

             /* go to the clicked course*/

                  var dimension = this.getBoundingClientRect();
           if($(window).scrollTop() >= dimension.top )
             return;
               $("body,html").animate({scrollTop : dimension.top},{
                   duration:500
               });    
               } 
       });
  }

     /*== drop-down menu ==*/

   var $menuButton = $("#hamburger-menu");
   $menuButton.on("click",function(){

        $("ul:first").slideToggle();
   });  

  });