//Need a second event

$( document ).ready(function()
{

  // $("#Pgraph").css("backgroundColor", "yellow");
  var para= $("#Pgraph");
  para.css("backgroundColor", "yellow");
  // $("loop1").css("backgroundColor", "yellow");

  var image=$('#loop1');
  image.hide();
  image.width(700);
  image.height(700);

  var clicker= $('#clicker');


  var click2=$('#cool');
  click2.hide();

  clicker.click(function() {
  image.fadeIn( "slow", function() {
    // Animation complete
  });
  click2.fadeIn( "slow", function() {
    // Animation complete
  });
});



  var image2=$('#loop2');
  image2.hide();
  image2.width(700);
  image2.height(700);

  var video=$('#video');
  video.hide();


  click2.click(function() {
  image2.fadeIn( "slow", function() {
    // Animation complete
  });

  video.fadeIn( "slow", function() {
    // Animation complete
  });

});


  // $('#loop1').width(700); // Units are assumed to be pixels
  // $('#loop1').height(700);


});
