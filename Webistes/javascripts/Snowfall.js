//Snowfall.js

// Code from: https://developers.google.com/chart/interactive/docs/gallery/columnchart



var mountain1= "Whistler";
var mountain2 = "Chamonix";
var mountain3 = "Breckenridge";

google.charts.load('current', {'packages':['bar']});
google.charts.setOnLoadCallback(drawChart(mountain1, mountain2, mountain3));

$(function(){

  function setMountain()
  {
    var chkCnt = 0;
    if ($("#mountain-select1").val() !="none"){
      mountain1= $("#mountain-select1").val();
      chkCnt ++;
    }
    if ($("#mountain-select2").val() !="none"){
      mountain2= $("#mountain-select2").val();
      chkCnt ++;
    }
    if ($("#mountain-select3").val() !="none"){
      mountain3= $("#mountain-select3").val();
      chkCnt ++;
    }
    console.log(chkCnt);
    if (chkCnt == 3){
      drawChart(mountain1, mountain2, mountain3);
    }
  }

  $("#enter").click(function(){
    setMountain();
  });
});

// mount1=mountain1;
// mount2=mountain2;
// mount3=mountain3;
function drawChart(mount1, mount2, mount3) {
// alert("Mount1= " + mount1 + " Mount2= " + mount2 + " Mount3= " + mount3);

  var data = google.visualization.arrayToDataTable([
    ['Total Snow Fall', mount1, mount2, mount3],
    ['2014', 1000, 400, 200],
    ['2015', 1170, 460, 250],
    ['2016', 660, 1120, 300],
    ['2017', 1030, 540, 350]
  ]);

  var options = {
    chart: {
      title: 'Snowfall',
      subtitle: 'Total Snowfall per Resort by Year',
    }
  };

  var chart = new google.charts.Bar(document.getElementById('columnchart_material'));

  chart.draw(data, google.charts.Bar.convertOptions(options));
}
