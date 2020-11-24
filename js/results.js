'use strict';

var displayItems = document.getElementById('yourChoice');
var ourChoice = document.getElementById('ourChoice');
var grabData = localStorage.getItem('campingProducts');
var parsedGrabData = JSON.parse(grabData);
var masterList = [...parsedGrabData[0].masterList];
var weHaveList = [...parsedGrabData[0].weHaveList];

var thankYou = document.getElementById('thank-you');
thankYou.textContent = `Thank you for using our site ${parsedGrabData[0].name}`;
console.log(parsedGrabData);

function renderList() {
  for (var i = 0; i < weHaveList.length; i++) {
    var li = document.createElement('li');
    li.textContent = weHaveList[i];
    displayItems.appendChild(li);
  }
}

for (var i = 0; i < masterList.length; i++) {
  if(!weHaveList.includes(masterList[i])){
    var li = document.createElement('li');
    li.textContent = masterList[i];
    ourChoice.appendChild(li);
  }
}
renderList();


