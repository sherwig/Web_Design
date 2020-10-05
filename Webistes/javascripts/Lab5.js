// Lab5.js

// https://records.nhl.com/site/api

document.getElementById("search-button").addEventListener("click", keyword_search);

function keyword_search() {
  //get search value
  var search_term = document.getElementById("query").value;

  //url for search
  // var url = new URL('https://www.googleapis.com/youtube/v3/search');

  var url = new URL('https://statsapi.web.nhl.com/api/v1/');
  // https://statsapi.web.nhl.com/api/v1/

  var url2 = new URL('https://statsapi.web.nhl.com/api/v1/franchises');

// var url = "https://www.googleapis.com/youtube/v3/search?key=AIzaSyBz7S_VPKC4Y_Z9CfrRGEGMQgiul1v3dc8&part=snippet&maxResults=10&q=" + search_term;

  //create search parameters
  var params = {
    q: search_term,
    part: 'snippet',
    maxResults: 10,
    // key: "AIzaSyBz7S_VPKC4Y_Z9CfrRGEGMQgiul1v3dc8"
  };

  //set search parameters
  // url.search = new URLSearchParams(params);

  //fetch data
//   fetch(url)
//     .then(response => response.json())
//     .then(data => showResults(data))
//     .catch() //handle error
// }


// let requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
let request = new XMLHttpRequest();
request.open('GET', url2);
request.responseType = 'json';
request.send();

request.onload = function() {
  var superHeroes = request.response;
  populateHeader(data);
  showHeroes(data);
};

function showResults(data) {
  // Work with JSON data here
  console.log(data);
  // create array of items
  var result_items = data.items;

  //clear results section
  document.getElementById("results").innerHTML = "";

  //loop through the JavaScript array and get the title and thumbnail for each video

  // for (i = 0; i, result_items.length; i++) {
  //   //get title
  //   var title = result_items[i].snippet.title;
  //   //get thumbnail image
  //   var thumb_img = '<img src="' + result_items[i].snippet.thumbnails.default.url + '">';
  //   //add image and title to results section
  //   document.getElementById("results").innerHTML += "<div class='video'>" + thumb_img + "<br>" + title;
  // }

  //loop through the JavaScript array and create an iframe for each video

  for (i = 0; i, result_items.length; i++) {
    //gets the id of the video
    // var id = result_items[i].id.videoId;
    //defines an iframe for the video
    var video = '<p><iframe class="video-result" src="https://www.youtube.com/embed/' + teamName + '" frameborder="0"></p>';

    var stat1=teamName;

    //add the video iframe to results section
    document.getElementById("results").innerHTML += stat1;
  }
}
