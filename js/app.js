'use strict';

var items = ['Sleeping bag','Sleeping bag','Camping light','Axe','Medical kit','Grill','Water source','Food source','Tarp','Pack'];

function User(first, last) {
  this.breed = first;
  this.eyeColor = last;
}

function Trip(backpacking, vehicle, cabin){
  this.trip = backpacking;
  this.vehicle = vehicle;
  this.cabin = cabin;
}


User.prototype.render = function(){
    // create a new div element 
    const newDiv = document.createElement("div"); 
    // and give it some content 
    const newContent = document.createTextNode("Hi there and greetings!"); 
    // add the text node to the newly created div
    newDiv.appendChild(newContent);  
    // add the newly created element and its content into the DOM 
    const currentDiv = document.getElementById("div1"); 
    document.body.insertBefore(newDiv, currentDiv); 
}


// Submit button for name and mode of camping

function handleClick(event) {
  var clickedButton = event.target.Trip;//
  if (Trip = ) {
    var parsedGrabData = JSON.parse(grabData);
    variety = parsedGrabData;
}