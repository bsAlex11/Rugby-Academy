$(document).ready(function(){

  var $photoList = $(".photo");
  var $close = $("#close");
  var $galleryOverlay = $("#gallery-overlay");
  var $galleryModal = $("#gallery-modal");
  var $target = $("#main-pic");
  var $currentPosition;
  var $right = $("#right");
  var $left = $("#left");

    /* show picture in modal*/

  $photoList.on("click",function(event){
       $galleryOverlay.show();
       $galleryModal.show();

      var link = $(this).children("img").attr("src");
      $target.attr("src",link);
      $currentPosition = $(this).index(); 
 
});

       /* arrows functionality in the modal*/

   $right.on("click",function(){
    
       if($currentPosition == $photoList.length-1)
          $currentPosition = -1;

      var $nextSource = $photoList.eq($currentPosition+1)
      .children("img")
      .attr("src");
      $target.attr("src",$nextSource); 
      $currentPosition++;
   });

   $left.on("click",function(){

      if($currentPosition < 0)
          $currentPosition = $photoList.length-1; 

      var $previousPosition = $photoList.eq($currentPosition-1)
                              .children("img")
                              .attr("src");
      $target.attr("src",$previousPosition);
      $currentPosition--;                        
   });


 $close.on("click",function(){
   
     $galleryModal.hide();
     $galleryOverlay.hide();
 });
  

     /* back to top */

     var $toTop = $("#toTop");
        $(window).on("scroll",function(){

              if($(this).scrollTop() > 100 )
                 $toTop.fadeIn();
                else
                  $toTop.fadeOut(); 
        });
     $toTop.on("click",function(){
          
         $("body,html").animate({scrollTop:0},{duration:500});  
     });   



    var $menuButton = $("#hamburger-menu");
    $menuButton.on("click",function(){

         $("ul").first().slideToggle();
    });           
});