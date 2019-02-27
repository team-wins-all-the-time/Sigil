'use strict';
//get from local storage
// 1. Target element i want to put local storage in
// 2. Acess Local Storage
// 3. Put items from local storage in targeted id
// var sigil_space = document.getElementById('generator');
// var ctx = sigil_space.getContext('2d');

var retrieve = localStorage.getItem('pic');
var sigil_array = JSON.parse(retrieve);

var target = document.getElementsByClassName('scrollmenu');
for(var i =0; i < sigil_array.length; i++){
  console.log(sigil_array);
  var img_el = document.createElement('IMG');
  img_el.src = sigil_array[i];
  target.appendChild(img_el);
}

