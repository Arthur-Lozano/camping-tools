'use strict';

var myForm = document.getElementById('campTime');
// var parentElement = document.getElementById('theList');
var campingProducts = [];
var backPackingList = ['sleeping bag', 'tent', 'camp chairs', 'flashlight', 'batteries', 'firewood', 'water', 'food', 'pillow', 'thermos', 'cooking equipment', 'matches', 'air pump', 'clothes', 'boots', 'rain gear', 'toiletries', 'trash bags', 'cooler', 'laundry bag'];
var vehicleList = ['surge protector', 'electrical adapters', 'toilet chemicals', 'leveling blocks', 'shovel', 'batteries', 'flashlight', 'jumper cables',
  'fire extinguisher', 'motor oil', 'chocks', 'trash bags', 'food', 'bedding', 'pressure regulator', 'dishes', 'chargers'];
var cabinList = ['shovel', 'charcoal', 'lighter fluid', 'grate', 'fire gloves', 'lighters', 'firewood', 'hammer', 'hatchet', 'tarps', 'chairs', 'pie iron', 'rope', 'clothes line', 'stakes', 'coat', 'fuel', 'flashlights', 'first aid kit'];

//Constructor function
function Camper(name, weHaveList, masterList) {
  this.name = name;
  this.weHaveList = weHaveList;
  this.masterList = masterList;
  // this.itemOne = itemOne;
  // this.itemTwo = itemTwo;
  // this.itemThree = itemThree;
  // this.itemFour = itemFour;
  campingProducts.push(this);
}
console.log(campingProducts);

Camper.prototype.render = function () { // generates a new list item for each item entered into text field
  //key+name = arrayName
  for (var i = 0; i < campingProducts[0].weHaveList.length; i++) {
    var li = document.createElement('li');
    li.textContent = campingProducts[0].weHaveList[i];
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
function formSubmit(event) {
  event.preventDefault();
  var form = event.target;
  var userName = form.name.value;
  var tripType = form.trip.value;
  var itemOne = form.itemOne.value;
  var itemTwo = form.itemTwo.value;
  var itemThree = form.itemThree.value;
  var itemFour = form.itemFour.value;
  var itemsArray = [itemOne, itemTwo, itemThree, itemFour];
  if (tripType === 'backPacking') {
    var masterList = [...backPackingList];
  } else if (tripType === 'vehicleTrip') {
    masterList = [...vehicleList];
  } else if (tripType === 'cabinTrip') {
    masterList = [...cabinList];
  }

  new Camper(userName, itemsArray, masterList);
  // parentElement.innerHTML = '';

  var stringifiedArray = JSON.stringify(campingProducts);
  localStorage.setItem('campingProducts', stringifiedArray);

  window.location.replace('/results.html');
}
myForm.addEventListener('submit', formSubmit);








