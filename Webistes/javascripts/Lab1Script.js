
const price = document.querySelector('#price');
const output = document.querySelector('.price-output');

output.textContent = price.value;

price.addEventListener('input', function() {
  output.textContent = price.value;
});

var btn2 = document.createElement("BUTTON");
btn2.innerHTML = "Click Me";
document.getElementById("append").appendChild(btn2);

btn2.addEventListener('click', function()
{
  const para = document.querySelector('p');
  para.style.color = 'white';
  para.style.backgroundColor = 'black';
  para.style.padding = '10px';
  para.style.width = '250px';
  para.style.textAlign = 'center';

});

//https://www.w3schools.com/JSREF/met_document_createelement.asp
var btn = document.createElement("BUTTON");
btn.innerHTML = "Show More";
document.body.appendChild(btn);


btn.addEventListener('click', function()
{
  // https://stackoverflow.com/questions/20673959/how-to-add-new-li-to-ul-onclick-with-javascript
  var ul = document.getElementById("diets");
  var li = document.createElement("li");
  var li2 = document.createElement("li");
  li.appendChild(document.createTextNode("Vegetarian"));
  li2.appendChild(document.createTextNode("Carnivore"));
  ul.appendChild(li);
  ul.appendChild(li2);

});
