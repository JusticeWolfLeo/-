$(document).ready(function() {
    $(".title").lettering();
  });
  
  $(document).ready(function() {
    animation();
  }, 1000);

  $(".hu1").css("color","red");
  
  function animation() {
    var title1 = new TimelineMax();
    title1.to(".hu1", 0, {opacity: 1})
    title1.staggerFromTo(".title", 3, 
    {ease: Back.easeOut.config(1.7), opacity: 0, left: 2000},
    {ease: Back.easeOut.config(1.7), opacity: 1, left: 0}, 0.05);
    title1.to(".hu1", 0.2, {opacity: 1})
  }