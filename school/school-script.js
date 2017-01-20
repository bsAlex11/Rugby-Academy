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
    
       function isInView(el){
       
     var rect = el.getBoundingClientRect();
       
          if (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
    ) 
      console.log("yes");
       }
    isInView(document.getElementsByClassName("player-links")[0]);

       
              // on window width change, check if in viewport 
     

      if($this.scrollTop() > 412)
        {
          $("#individual").removeClass("move-individual");
          $("#team").removeClass("move-team");
          $("#scrum").fadeIn(1400);
        }
    
       if($this.scrollTop() > 810)
       {
         $("#player-transition").removeClass("links-transition");
       }

       if($this.scrollTop() > 1030)
         {
           $("#coach-transition").removeClass("links-transition");
         }

         if($this.scrollTop() > 1225)
          {
             $("h1",$facilityHeader).removeClass("moveText");
             $("p",$facilityHeader).removeClass("moveText"); 

          }

         if($this.scrollTop() > 1340 )   // !! to revise 
           {
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
    //console.log($this.scrollTop());   
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

  
});