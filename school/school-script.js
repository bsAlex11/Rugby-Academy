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
     

      if($this.scrollTop() > 412)
        {
          $("#individual").removeClass("move-individual");
          $("#team").removeClass("move-team");
          $("#scrum").fadeIn(1400);
        }
    
       if($this.scrollTop() > 930)
       {
         $("#player-transition").removeClass("links-transition");
       }

       if($this.scrollTop() > 1313)
         {
           $("#coach-transition").removeClass("links-transition");
         }

         if($this.scrollTop() > 1675)
          {
             $("h1",$facilityHeader).removeClass("moveText");
             $("p",$facilityHeader).removeClass("moveText"); 

          }

         if($this.scrollTop() > 1820 && $this.outerWidth() > 957)   // !! to revise 
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
    // console.log($this.scrollTop());   
    }
  

     //== show content from facilities divs on hover ==//

     $facilityContainerList.hover(inside,outside);
        
         function inside(){
            var $this = $(this);
              $this.find(".facility-overlay").fadeToggle("slow");
         }

         function outside(){
            var $this = $(this);
           $this.find(".facility-overlay").fadeToggle("slow");
         }
   
});