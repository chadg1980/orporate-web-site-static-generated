 $(document).ready(function(){
     
 


}); // end document ready



//for same height
$(window).load(function() {

// set height 
    var relmax = -1;
$('.sameheight').each(function() {
  var h = $(this).height(); 
  relmax = h > relmax ? h : relmax;
});
$('.sameheight').css('min-height',relmax);
    
    
    
    
    
    });
