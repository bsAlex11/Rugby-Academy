$(document).ready(function(){

 var $infoList = $("ul").eq(1).children("li");
 var $modal = $("#time-modal");
 var $overlay = $("#time-overlay");
 var $close = $("img",$modal);

   $infoList.on("click",showModal);
   $close.on("click",closeModal);


      function showModal(event){
 
          $overlay.show();
          $modal.show();

          var $this = $(this),
              $year = $("span",$this).clone(),
              $title = $this.find("h3").clone(),
              $content = $(".hidden",$this).children().clone();

         var $header = $("<div></div>",{
             id : "modal-header"
         });
         $header.append($year,$title);     
         $modal.append($header);
         $modal.append($content);
      }


      function closeModal(event){
          $overlay.hide();
          $modal.hide();

         var $list = $("*",$modal).not($close);
         $list.remove();
      }


    var menuButton = $("#hamburger-menu");
    menuButton.on("click",showMenu);

       function showMenu(){
           $("ul").first().slideToggle();
       }
});