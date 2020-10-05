//Snowfall.js

// Code from: https://developers.google.com/chart/interactive/docs/gallery/columnchart
var mountain1= "Whistler";
var mountain2 = "Chamonix";
var mountain3 = "Breckenridge";

google.charts.load('current', {'packages':['bar']});
google.charts.setOnLoadCallback(drawChart(mountain1, mountain2, mountain3));

$(function(){

//   function getSelectedOption(sel) {
//     var opt;
//     for ( var i = 0, len = sel.options.length; i < len; i++ ) {
//         opt = sel.options[i];
//         if ( opt.selected === true ) {
//             break;
//         }
//     }
//     return opt;
// }
//
//   tester=document.getElementById("mountain1-select");
//   var tester2=getSelectedOption(tester);
//   console.log(tester2.value);

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
    if (chkCnt == 4){
      drawChart(mountain1, mountain2, mountain3);
    }
  }


  // cu.addEventListener("click", setMountain, false);

  $("#enter").click(function(){
    setMountain();
  });
});

function drawChart(mount1, mount2, mount3) {

  // var mountain1 = document.querySelector('#mountain-select1').value;
  // let mountain1 = document.getElementById('mountain-select1').value;

  // var e = document.getElementById("mountain-select1");
  // var strUser = e.options[e.selectedIndex].value;
  // console.log(strUser);

  //select list

  // else {
  //   document.getElementById("mountain1-select").value="Breckenridge";
  // }


  // $("mountain-select1 :selected").text(); // The text content of the selected option
  // $("mountain-select1 :selected").val(); // The value of the selected option


  alert("Mount1= " + mount1 + "Mount3= " + mount2 + "Mount3= " + mount3);
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
