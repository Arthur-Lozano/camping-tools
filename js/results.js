'use strict';

var displayItems = document.getElementById('yourChoice');
var grabData = localStorage.getItem('campingProducts');
var parsedGrabData = JSON.parse(grabData);
// var masterList = [Sleeping Bag, Tent, Camp Chairs, Flashlight, Batteries, Firewood, Water, Food, Pillow, Thermos, Cooking Equipment, Matches, Air Pump, Clothes, Boots, Rain Gear, Toiletries, Trash Bags, Cooler, Laundry Bag];

console.log(parsedGrabData);

function renderList() {
  for (var i = 0; i < parsedGrabData.length; i++) {
    var li = document.createElement('li');
    li.textContent = parsedGrabData[i].itemOne;
    displayItems.appendChild(li);

    li = document.createElement('li');
    li.textContent = parsedGrabData[i].itemTwo;
    displayItems.appendChild(li);

    li = document.createElement('li');
    li.textContent = parsedGrabData[i].itemThree;
    displayItems.appendChild(li);

    li = document.createElement('li');
    li.textContent = parsedGrabData[i].itemFour;
    displayItems.appendChild(li);
  }
}

renderList();




