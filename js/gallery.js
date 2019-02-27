'use strict';
//get from local storage
// 1. Target element i want to put local storage in
// 2. Acess Local Storage
// 3. Put items from local storage in targeted id
// var sigil_space = document.getElementById('generator');
// var ctx = sigil_space.getContext('2d');

var retrieve_img = localStorage.getItem('pic');
var img_array = JSON.parse(retrieve_img);

var retrieve_text = localStorage.getItem('text');
var text_array = JSON.parse(retrieve_text);

var target = document.getElementById('scrollmenu');
var text_target = document.getElementsByClassName('img');

for(var i =0; i < img_array.length; i++){
  var img_el = document.createElement('IMG');
  img_el.src = img_array[i];
  img_el.classList.add('img');
  target.appendChild(img_el);
}
for(var j =0; j < text_array.length; j++){
  var h2_el = document.createElement('h2');
  h2_el.textContent = text_array[j];
  text_target.appendChild(h2_el);
}

