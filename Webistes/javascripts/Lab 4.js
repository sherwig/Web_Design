//Need a second event

$( document ).ready(function()
{

  var title= $("#title");
  title.mouseenter(function() {
      title.css("opacity", ".5");
  });

  title.mouseleave(function() {
      title.css("opacity", "1");

  });

  // $("#Pgraph").css("backgroundColor", "yellow");
  var para= $("#Pgraph");
  para.mouseenter(function() {
      para.css("color", "white");
  });

  para.mouseleave(function() {
      para.css("color", "black");

  });

  // $("loop1").css("backgroundColor", "yellow");

  var image=$('#loop1');
  image.hide();
  image.width(400);
  image.height(400);

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

image.mouseenter(function() {
    image.width(600);
    image.height(600);
});

image.mouseleave(function() {
    image.width(400);
    image.height(400);
});


  var image2=$('#loop2');
  image2.hide();
  image2.width(600);
  image2.height(600);

  var video=$('#video');
  video.hide();


  click2.click(function() {
  image2.fadeIn( "slow", function() {
    // Animation complete
  });

  image2.mouseenter(function() {
      image2.width(600);
      image2.height(600);
  });

  image2.mouseleave(function() {
      image2.width(400);
      image2.height(400);
  });



  video.fadeIn( "slow", function() {
    // Animation complete
  });

});


  // $('#loop1').width(700); // Units are assumed to be pixels
  // $('#loop1').height(700);


});
