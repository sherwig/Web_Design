// Lab6.js
// var firebaseConfig = {
//   apiKey: "AIzaSyByar2zIXFIVoYr_2Ky3i8Vq0kQ_TNkPGU",
//   authDomain: "buff-tickets.firebaseapp.com",
//   databaseURL: "https://buff-tickets.firebaseio.com",
//   projectId: "lab-6-76d88",
//   storageBucket: "buff-tickets.appspot.com",
//   messagingSenderId: "663114550856",
//   appId: "1:663114550856:web:3fd05141ab9b9d6e6cd27d"
// };

var database = firebase.firestore();


  // firebase.analytics();


database.collection("orders").add({
    name: new_name,
    email: new_email,
    team: new_team,
    payment: new_payment
  })

  .then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
  })
  .catch(function(error) {
    console.error("Error adding document: ", error);
  });


  function Bandwagon()
  {
  	var fav;
    var from;
  	var score;
  	var arr = ["Oh your parents are from there?", "Oh so you used to live in that neck of the woods?",
                   "I didn't write a smart enough algorithm to actually tell so you pass from the random function."];

  	var response=document.getElementById("wagon");
  	//reset text area
  	response.value="";
    // console.log("Here");
  	score = document.querySelector('#price').value;

  	response.value+=  "So you think you are a " + score +  " Out of 10 Bandwagoner?\n";

    //favorite school
  	fav = document.getElementById("Fave").value;
  	response.value+=  "Your Favorite Team is: " + fav +  "\n";


    from = document.getElementById("From").value;
    response.value +=  "You are from: " + from + "\nNow does that make sense?\n";

  	response.value += "Just to repeat you are from "+document.getElementById("From").value+ "  and your favorite team is "+ document.getElementById("Fave").value +"\n";
  	response.value += arr[Math.floor(Math.random() * arr.length)]+ "\n";

  	// radio buttons
  	if(document.getElementById("Football").checked==true){
  		response.value+= "And your favorite sport is: "+document.getElementById("Football").value+ "wish my Fantasy team luck god knows they need it. Well anyways Go Donkeys!\n";
  	}

  	else if(document.getElementById("Basketball").checked==true){
  		response.value="";
  		response.value+="Well you are definitely a bandwagoner.\n";
  	}

  	else if(document.getElementById("Hockey").checked==true){
  		response.value+="And your favorite sport is: "+document.getElementById("Hockey").value+". Nice! Hockey is the best.\n";
  	}

  	else if(document.getElementById("Baseball").checked==true){
  		response.value+="And your favorite sport is: "+document.getElementById("Baseball").value+"Ah so you are kinda old. Probably pretty loyal you pass.\n";
  	}

    //checkboxes
  	if(document.getElementById("Defense").checked==true)
    {
  		response.value+="God I love a good defensive battle. \n";
  	}

    if(document.getElementById("Offense").checked==true)
    {
      response.value+="Well who doesn't like " + document.getElementById("Offense").value + "\n";
    }

    if(document.getElementById("Stars").checked==true)
    {
      response.value+="Well you probably like Basketball then because you are a fan of " + document.getElementById("Stars").value + "\n"+ "So you are bandwagoner";
    }




    // else {
  	// 	if (document.getElementById("ticketsno").checked==true){
  	// 		response.value+="You would not like to purchase season tickets.\n";
  	// 	}
  	// }
  // 	//select list
  // 	if (document.getElementById("team").value!="none"){
  // 		response.value+="You would like to purchase season tickets for "+ document.getElementById("team").value;
  // 	}
   }

  const price = document.querySelector('#price');
  const output = document.querySelector('.price-output');

  output.textContent = price.value;

  price.addEventListener('input', function()
  {
    output.textContent = price.value;
  });

  var cu=document.getElementById("Button1");
  cu.addEventListener("click", Bandwagon, false);




// Project name: Lab-6
// Project ID: lab-6-76d88
// Project number: 859656048911
// Default GCP resource location: Not yet selected
// Web API Key: AIzaSyByar2zIXFIVoYr_2Ky3i8Vq0kQ_TNkPGU
