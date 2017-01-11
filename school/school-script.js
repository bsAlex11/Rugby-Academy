$(document).ready(function(){

    /* translate the divs on scroll down */

 $(window).on("scroll", showDivs);

    function showDivs(){
     var $this = $(this); 
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
      console.log($this.scrollTop());   
    }

});