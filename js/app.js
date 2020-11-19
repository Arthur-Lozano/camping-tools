'use strict';


var myForm = document.getElementById('campTime');
var campingItems = [];
var parentElement = document.getElementById('theList');


//Constructor function
function Camping(itemOne, itemTwo, itemThree, itemFour) {
  this.itemOne = itemOne;
  this.itemTwo = itemTwo;
  this.itemThree = itemThree;
  this.itemFour = itemFour;
}

Camping.prototype.render = function () { // runs/generates a row for each object instantiated
  var ol = document.createElement('OL');
  ol.textContent = this.itemOne;
  parentElement.appendChild(ol);
  ol = document.createElement('li');
  ol.textContent = this.itemTwo;
  parentElement.appendChild(ol);
  ol = document.createElement('li');
  ol.textContent = this.itemThree;
  parentElement.appendChild(ol);
  ol = document.createElement('li');
  ol.textContent = this.itemFour;
  parentElement.appendChild(ol);
};

// render everything
function renderAll() {
  console.log(campingItems);
  for (var i = 0; i < campingItems.length; i++) {
    campingItems[i].render();
  }
}

// Below is the event handler
myForm.addEventListener('submit', formSubmit);
function formSubmit(event) {
  event.preventDefault();
  var form = event.target;
  var itemOne = form.itemOne.value;
  var itemTwo = form.itemTwo.value;
  var itemThree = form.itemThree.value;
  var itemFour = form.itemFour.value;

  campingItems.push(new Camping(itemOne, itemTwo, itemThree, itemFour));
  parentElement.innerHTML = '';
  renderAll();
}
renderAll();









