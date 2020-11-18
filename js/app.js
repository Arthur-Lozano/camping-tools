'use strict';

var itemsBackpacking = ['Sleeping bag', 'Flash light', 'Camping light', 'Axe', 'Medical kit', 'Grill', 'Water source', 'Food source', 'Tarp', 'Pack'];
var itemsVehicle = ['Sleeping bag', 'Flash light', 'Camping light', 'Axe', 'Medical kit', 'Grill', 'Water source', 'Food source', 'Tarp', 'Pack'];
var itemsCabin = ['Sleeping bag', 'Flash light', 'Camping light', 'Axe', 'Medical kit', 'Grill', 'Water source', 'Food source', 'Tarp', 'Pack'];
var notNeeded = [];

function User(name) {
  this.name = name;
}

function Trip(backpacking, vehicle, cabin) {
  this.trip = backpacking;
  this.vehicle = vehicle;
  this.cabin = cabin;
}

function neededTools() {
  if (notNeeded === itemsBackpacking && itemsCabin && itemsVehicle) {
    itemsBackpacking.pop();//could pop each array since only one will displayed
    itemsCabin.pop();
    itemsVehicle.pop();
  } else {

  //List item
  function renderResults() {
    for (var i = 0; i < variety.length; i++) {
      // create element
      var li = document.createElement('li');
      // give it content
      li.textContent = `${User.name} check out these camping tools! ${Trip.neededTools}`;
      // append it to the dom
      hoobsList.appendChild(li);
    }
  }
}


document.body.onload = addElement;
Trip.prototype.render = function () {
  // create a new div element 
  const newDiv = document.createElement("div");
  // and give it some content 
  const newContent = document.createTextNode("Welcome!  Below are your recommended camping items.");
  // add the text node to the newly created div
  newDiv.appendChild(newContent);
  // add the newly created element and its content into the DOM 
  const currentDiv = document.getElementById("campingTools");
  document.body.insertBefore(newDiv, currentDiv);
}


// Submit button for name and mode of camping

function handleClick(event) {
  var clickedButton = event.target.items;// when button is clicked needed items are displayed
  neededTools();
}