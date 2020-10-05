//Snowfall.js

// Code from: https://developers.google.com/chart/interactive/docs/gallery/columnchart

google.charts.load('current', {'packages':['bar']});
google.charts.setOnLoadCallback(drawChart);
var mountain1= "Whistler";
var tester;


window.onload=function(){

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
    if (document.getElementById("mountain1-select").value!="none"){
      mountain1= document.getElementById("mountain1-select").value;
    }
  }

  var cu=document.getElementById("enter");
  // cu.addEventListener("click", setMountain, false);

  cu.addEventListener("submit", function(event){
  setMountain();
  event.preventDefault(); //prevents page from being reloaded
  });
};




function drawChart() {

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



  var data = google.visualization.arrayToDataTable([
    ['Total Snow Fall', mountain1, 'Chamonix', 'Breckenridge'],
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
