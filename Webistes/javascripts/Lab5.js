// Lab5.js

// https://records.nhl.com/site/api

// document.getElementById("search-button").addEventListener("click", keyword_search);

var url2 = new URL('https://statsapi.web.nhl.com/api/v1/franchises');
var data;

fetch(url2)
    .then(response => response.json())
    .then(data=> showResults(data))
    // .then(data => showResults(data))
    .catch() //handle error


// showResults(data2);
  // create search parameters
  // var params = {
  //      q: 5,
  //     // part: 'franchises',
  //     // maxResults: 10,
  //     // key: "AIzaSyBz7S_VPKC4Y_Z9CfrRGEGMQgiul1v3dc8"
  //     };
  //
  //   url2.search = new URLSearchParams(params);

// function keyword_search() {
//   //get search value
//   var search_term = document.getElementById("query").value;
//
//   //url for search
//   // var url = new URL('https://www.googleapis.com/youtube/v3/search');
//
//   var url = new URL('https://statsapi.web.nhl.com/api/v1/');
//   // https://statsapi.web.nhl.com/api/v1/
//
//
//
// // var url = "https://www.googleapis.com/youtube/v3/search?key=AIzaSyBz7S_VPKC4Y_Z9CfrRGEGMQgiul1v3dc8&part=snippet&maxResults=10&q=" + search_term;
//

//
//   //set search parameters
//
//
//   //fetch data
//
//

//
//

//

function showResults(data) {
  // Work with JSON data here

  // create array of items
  var result_items = data.franchises;
  console.log(result_items);
  //
  // //clear results section
  document.getElementById("results").innerHTML = "";

  //loop through the JavaScript array and get the title and thumbnail for each video

  for (i = 0; i< result_items.length; i++) {

    // get title

    var title = result_items[i].teamName;
    var location = result_items[i].locationName;
    console.log(title);
    // get thumbnail image

    // var thumb_img = '<img src="' + result_items[i].snippet.thumbnails.default.url + '">';
    // add image and title to results section

    document.getElementById("results").innerHTML += "<div class='ID'>" + "The " + title + " are located in: " +location;
  }

  //loop through the JavaScript array and create an iframe for each video

  // for (i = 0; i, result_items.length; i++) {
  //   //gets the id of the video
  //   // var id = result_items[i].id.videoId;
  //   //defines an iframe for the video
  //   var video = '<p><iframe class="video-result" src="https://www.youtube.com/embed/' + teamName + '" frameborder="0"></p>';
  //
  //   var stat1=teamName;
  //
  //   //add the video iframe to results section
  //   document.getElementById("results").innerHTML += stat1;
  // }
}
