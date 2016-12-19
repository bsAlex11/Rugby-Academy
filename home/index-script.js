$(document).ready(function(){
 
    /* == the menu button functionality in mobile == */

 $("#hamburger-menu").on("click",function(){
    $("ul:first").slideToggle();
 });

  /* == the slideShow == */

  var $container = $("#slider-container"),
      $slide = $container.find(".slide"),
      $leftArrow =  $(".arrow:first"),
      $rightArrow = $("#right-arrow"),
      interval; 

      $leftArrow.on("click",moveLeft);
      $rightArrow.on("click",moveRight);

   
   for(var i = 1; i < $slide.length; i++)    // hide all the images except the first
       $slide.eq(i).hide();
    
    function startSlide(){                   // cycle through all the divs, fadein and fadeout them
        interval = setInterval(function(){
           $(".slide:visible").fadeOut("slow").next().
             fadeIn("slow").end().
             appendTo($container);
       },5000);
    }
    startSlide();


     function moveLeft(){                         
        
    clearInterval(interval);  
        
      $("div:visible",$container).fadeOut("slow");  // hide the visible image, the first one in the auto-reareging list
     
      $("div:last-child",$container).prependTo($container).fadeIn("slow");    // go to the last one, visible.prev, make it the first in list via prependTo, and show it
      
      startSlide(); 

        /* var $current = $(".slide:visible");    // a first version,not working 100%
            
         if ($current.prev().length < 1)
           { 
               $current.fadeOut("slow");
             $(".slide:last").fadeIn("slow");
           
           }   
         else 
          {
              $current.fadeOut("slow").
               prev().fadeIn("slow");
          }     */
     }


    function moveRight(){
        clearInterval(interval);

    $("div:visible",$container).fadeOut("slow")     // similar to the initial cycle, hide the actual img, go to the next and show it
                                                   // back to the initial selection and put it at the start of the list via appendTo
      .next().fadeIn("slow")
       .end().appendTo($container);
     startSlide(); 
      /*  var $current = $(".slide:visible");    // a first version,not working 100%

        if($current.next().length < 1)
         {
             $current.fadeOut("slow");
             $(".slide:first").fadeIn("slow");
         }
        else 
        {
            $current.fadeOut("slow");
            $current.next().fadeIn("slow");
        } */
        
    }
   
       
        /*== show course details div based on selected option== */

    var $optionsList = $(".allCourses");               // the 3 divs with options
    var $coursesList = $(".course-content-list");     // the 3 divs with course details

    $optionsList.on("click",function(event){
     
          $coursesList.hide();                              // hide all the divs with the details
          $optionsList.css("background-color","#EBEFF0");      // change the colors
          $(this).css("background-color","white");

          var data = $(this).data("section");               // data of the clicked option
         
          $coursesList.each(function(){
            var identifier = (this.id).split("-")[0];    // run through all the divs with details
            if(identifier.indexOf(data) > -1)             // and find the one with id == with the clicked option's data
              $(this).show();
          });       
    });  

     
      /* == back to top == */
      
var $scrollButton = $("#toTop"),
    $window = $(window);
    $window.on("scroll",showButton);

      function showButton() { 
      if( $window.scrollTop() > 150)
         $scrollButton.fadeIn();
        else 
        $scrollButton.fadeOut(); 
       
    }
    
    $scrollButton.on("click",function(){
        $("body").animate({
          scrollTop: 0  
        },
        { duration: 1000});
    }); 
   
     /* counter section */

   $window.on("scroll",theCount);    /* when reaching the counter section*/

    function theCount(){    
      
       if($window.scrollTop() > 1420)
         {
            $window.off("scroll", theCount);
            startCounting();                 // call the counter function
         }
   } 

$(".toHide").hide();
$(".toMiddle").css("padding-top","22%");

     function startCounting(){

   var countList = $(".number");
   $(".toHide").show();
   $(".toMiddle").css("padding-top","0");

   countList.each(function(){
   var $this = $(this);      
     $({Counter:0}).animate({Counter: $this.text()},
     {
         duration: 800,
         ease: "swing",
         step: function(){
             $this.text(Math.ceil(this.Counter))
         }
     });
   });
     }
        

});