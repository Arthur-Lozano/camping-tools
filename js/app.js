'use strict';

var recItems = [];
var myForm = document.getElementById('campTime');
var parentElement = document.getElementById('theList');
var campingProducts = [];
var userData = localStorage.getItem('userResults');


//Constructor function
function Camping(itemOne, itemTwo, itemThree, itemFour) {
  this.itemOne = itemOne;
  this.itemTwo = itemTwo;
  this.itemThree = itemThree;
  this.itemFour = itemFour;
  campingProducts.push(this);
}

Camping.prototype.render = function () { // generates a new list item for each item entered into text field
  //key+name = arrayName
  for (var i = 0; i < campingProducts.length; i++) {
    var li = document.createElement('li');
    li.textContent = campingProducts[i].itemOne;
    parentElement.appendChild(li);
    li = document.createElement('li');
    li.textContent = campingProducts[i].itemTwo;
    parentElement.appendChild(li);
    li = document.createElement('li');
    li.textContent = campingProducts[i].itemThree;
    parentElement.appendChild(li);
    li = document.createElement('li');
    li.textContent = campingProducts[i].itemFour;
    parentElement.appendChild(li);
  }
};



// render everything
function renderAll() {
  for (var i = 0; i < campingProducts.length; i++) {
    campingProducts[i].render();
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

  new Camping(itemOne, itemTwo, itemThree, itemFour);
  parentElement.innerHTML = '';
  renderAll();

  var stringifiedArray = JSON.stringify(campingProducts);
  localStorage.setItem('campingProducts', stringifiedArray);
}










