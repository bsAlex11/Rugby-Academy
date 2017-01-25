$(document).ready(function(){

var $facilityContainerList = $(".facility-container");   // to be used for on hover and on scroll
var $window = $(window);
var $backToTop = $("#toTop");

           /*== back to top button  functionality ==*/

       $backToTop.on("click", function(){
           $("body").animate({scrollTop : 0},
           {
              duration: 800
           }); 
       });     

       /*== drop-down menu ==*/

    $("#hamburger-menu").on("click",function(){

         $("ul:first").slideToggle();
    });   
      

      
       function isInView(el){                /* function to check if an element is in the viewport*/
       
     var rect = el.getBoundingClientRect();
       
          return (
        rect.top <= (window.outerHeight/1.5) &&
        rect.bottom /2 <= (window.outerHeight ) 
    ) 
      
       }

         function showFacilities(){          /* shows the facilities section*/

               setTimeout(function(){
                  var counter = 0;                // show a div per secon after 1 sec wait after page load
                  setInterval(function(){
            
                      $facilityContainerList.eq(counter).fadeIn("1000");
                      counter++;
                      if(counter == $facilityContainerList.length)
                        return;

                  },500)

               },500);
           }
    

    /*== translate the divs on scroll down ==*/

 $window.on("scroll", showDivs);

    function showDivs(){
     var $this = $(this); 
     var $facilityHeader = $("#facilities-header-container");

           /*== back to top button ==*/

         if($this.scrollTop() > 200)
           {
               $backToTop.fadeIn(); 
           }  
            else 
              $backToTop.fadeOut();

        //== check if specific elems are in viewport to animate them == //
           

        if(isInView(document.getElementById("individual")))
              { 
                 $("#individual").removeClass("move-individual");
                 $("#team").removeClass("move-team");
                 $("#scrum").fadeIn(1400);
               }

        if(isInView(document.getElementById("player-transition")))   
               {
                 $("#player-transition").removeClass("links-transition");

                }

        if(isInView(document.getElementById("coach-transition")))
               {
                 $("#coach-transition").removeClass("links-transition");
               }   

        if(isInView(document.getElementById("facilities-container")))
               {
                 $("h1",$facilityHeader).removeClass("moveText");
                 $("p",$facilityHeader).removeClass("moveText"); 
               }

         if(isInView(document.getElementById("each-facility-container")))  
               {
                 showFacilities();
               } 
          

    }

     //== show content from facilities divs on hover ==//

     $facilityContainerList.hover(inside,outside);
        
         function inside(){
            var $this = $(this);
              $this.find(".facility-overlay, p").fadeToggle("slow");
         }

         function outside(){
            var $this = $(this);
           $this.find(".facility-overlay, p").fadeToggle("slow");
         }

   //== go to courses page when click on course ==//

      var $buttons = $("button");
      $buttons.on("click",goToPage);

       function goToPage(){
         window.location.href = "https://htmlpreview.github.io/?https://github.com/bsAlex11/Rugby-Academy/blob/master/courses/courses.html";
         
         var $finder = $(this).data("id");
           
           $courseList.each(function(i){
                
                $courseList.hide();
                if($finder == $(this).attr("id"))
                    $(this).show();
           });
       } 

     

        //*from courses page */
     // == show courses on the courses page ==//

     var $optionsList = $("#target").children();
     var $courseList = $(".course-list");
      $optionsList.on("click", showCourse);

       function showCourse(){
          var $this = $(this);
          var data = $this.data("id");
          $optionsList.css("color","black");
          $this.css("color","grey");

        $courseList.each(function(index){
           var $this = $(this);
            if($this.attr("id") == data)
              {
               $courseList.hide();
                $this.show();
              }
        })
       }
       
});