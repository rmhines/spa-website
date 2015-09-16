$(document).ready(function(){

  var $window = $(window);

  // Smooth scrolling
  var scrollTime = 1.2;
  var scrollDistance = 170;

  /*
  $window.on("mousewheel DOMMouseScroll", function(event){
    event.preventDefault(); 
    var delta = event.originalEvent.wheelDelta/120 || -event.originalEvent.detail/3;
    var scrollTop = $window.scrollTop();
    var finalScroll = scrollTop - parseInt(delta*scrollDistance);
      TweenMax.to($window, scrollTime, {
      scrollTo : { y: finalScroll, autoKill:true },
      ease: Power1.easeOut,
      overwrite: 5              
    });
  });/*

  // Parallax effect
  /* Disabled until performace issues can be addressed*/
  $('body[data-type="background"]').each(function(){
    var $bgobj = $(this); // Assign the object
    $(window).scroll(function() {
      var yPos = -($window.scrollTop() / $bgobj.data('speed'));
      // Obtain final background position
      var coords = '50% '+ yPos + 'px';
      // Move the background
      $bgobj.css({ backgroundPosition: coords });
    });
  });/**/
});