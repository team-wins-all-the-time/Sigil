'use strict';
//get from local storage
// 1. Target element i want to put local storage in
// 2. Acess Local Storage
// 3. Put items from local storage in targeted id
// var sigil_space = document.getElementById('generator');
// var ctx = sigil_space.getContext('2d');

var retrieve = localStorage.getItem('pic');
var img_array = JSON.parse(retrieve);

var target = document.getElementById('scrollmenu');
for(var i =0; i < img_array.length; i++){
  console.log(img_array);
  var img_el = document.createElement('IMG');
  img_el.src = img_array[i];
  target.appendChild(img_el);
}

