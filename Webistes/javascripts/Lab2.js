

function Bandwagon()
{
	var fav;
  var from;


	var response=document.getElementById("wagon");
	//reset text area
	response.value="";
  // console.log(response.value);

  //favorite school
	fav = document.getElementById("Fave").value;
	response.value+=  "Your Favorite Team is: " + fav +  "\n";


  from = document.getElementById("From").value;
  response.value +=  "You are from: \n" + from + "\n Now does that make sense? \n";

  //checkboxes
	if(document.getElementById("Defense").checked==true)
  {
		response.value+="You Actually like " + document.getElementById("Defense").value + "\n";
	}

  if(document.getElementById("Offense").checked==true)
  {
    response.value+="Well who doesn't like " + document.getElementById("Offense").value + "\n";
  }

  if(document.getElementById("Stars").checked==true)
  {
    response.value+="Cool, " + document.getElementById("Stars").value + "\n";
  }

	// radio buttons
	if(document.getElementById("Football").checked==true){
		response.value+="You and all of America.\n";
	}

  else if(document.getElementById("Basketball").checked==true){
    response.value="";
		response.value+="Well you are definitely a bandwagoner\n";
	}

  else if(document.getElementById("Hockey").checked==true){
		response.value+="Nice!\n";
	}

  else if(document.getElementById("Baseball").checked==true){
		response.value+="Ah so you are kinda old. Probably pretty loyal you pass.\n";
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

var cu=document.getElementById("Button1");
cu.addEventListener("click", Bandwagon, false);
