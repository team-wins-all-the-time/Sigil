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
var section_target = document.getElementById('scrollmenu');


for(var i =0; i < img_array.length; i++){
  var section_el = document.createElement('section');

  var h2_el = document.createElement('h2');
  h2_el.textContent = text_array[i];
  section_el.appendChild(h2_el);

  var img_el = document.createElement('IMG');
  img_el.src = img_array[i];
  section_el.appendChild(img_el);

  target.appendChild(section_el);
}
