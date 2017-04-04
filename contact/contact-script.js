$(document).ready(function(){


 var $form = $("#contact-form"),
     $nameInput = $("#text-input"),
     $emailInput = $("#email-input"),
     $textareaInput = $("textarea",$form),
     $nameError = $nameInput.next(),
     $mailError = $emailInput.next(),
     $textError = $textareaInput.next();
     var $formList = $("input,textarea");


    $form.on("submit",formSubmit);
    $formList.on("blur",formsOnBlur);
    $formList.on("keyup",clearMessage);


      function formSubmit(event){

 event.preventDefault();

       if (! (validate($nameInput,"text")))          /* check every input field*/
          {
            event.preventDefault();
          $nameError.addClass("error");
          return;
          }
           else {
             $nameError.removeClass("error");
           }
      
       if(! (validate($emailInput,"email")))
         { 
             event.preventDefault();
             $mailError.addClass("error");
             return;
         }
          else $mailError.removeClass("error");

       if( !(validate($textareaInput,"textarea")))
         {
           event.preventDefault();
           $textError.addClass("error");
           return;
         }
          else $textError.removeClass("error");  

          var data = [];                                       /* store the data from the input fields into an array of objects */
                                                              /*each object contains the name of the field and the value typed by the user */
        $.each($formList,function(i,val){
            
              var obj = {
                  name : val.getAttribute("name"),
                  value : val.value
              };
            data.push(obj);  
        });
        var bing = JSON.stringify(data);                 /* encode the array into JSON format*/


       function end(){
       $("#message").show();
       setTimeout(function() {
            $("#message").fadeOut();
            location.reload();
        }, 1500);
         
    }
       end();
         
}

     function validate(element, typeOfInput){                           /*the function takes 2 arguments, the input element and the type of the input element  */
                                                                       /* it validates the data typed by the user based on the type of the input field*/   
          if(typeOfInput == "text")
            {
                var pattern = /^[a-zA-Z ]+$/;
                  if(!(pattern.test(element.val())) || element.val().length == 0)
                  return false; 
            }

          if(typeOfInput == "email")
            {
                var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if(!(pattern.test(element.val())) || element.val().length == 0)
                  return false;
            }  

          if(typeOfInput == "textarea") 
            {
                var pattern =  /^[a-zA-Z \,\.\?\-/!\(\)\:]+$/;
                  if(!(pattern.test(element.val())) || element.val().length == 0)
                  return false;
            }  
         return true;   
     } 
           
        function formsOnBlur(event){
         
            var $this = $(this);
            var data = this.id.split("-")[0];
             if( !(validate($this,data)))
               $this.next().addClass("error");
              else $this.next().removeClass("error");       
        }
   
        function clearMessage(event){
             
             $(this).next().removeClass("error");
        }
 
             /* back to top */


      var $backToTop = $("#toTop");
      var $window = $(window);
      var $menuButton = $("#hamburger-menu");
      $window.on("scroll",function(){
         
         if($(this).scrollTop() > 50)
            $backToTop.fadeIn();
            else 
              $backToTop.fadeOut();
      });

      $backToTop.on("click",function(){

         $("body,html").animate({scrollTop:0},{duration:200});
      });

     $menuButton.on("click",function(){

         $("ul").first().slideToggle();
     });
          
});
