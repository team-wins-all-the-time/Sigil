'use strict';
//get from local storage
// 1. Target element i want to put local storage in
// 2. Acess Local Storage
// 3. Put items from local storage in targeted id
// var sigil_space = document.getElementById('generator');
// var ctx = sigil_space.getContext('2d');
var retrieve = localStorage.getItem('pic');
var sigil_array = JSON.parse(retrieve);
console.log(sigil_array);

var render_pic = document.getElementById('test');
render_pic.src = sigil_array;

var img_el = document.createElement('img');
var all_pic = [];
all_pic.push(sigil_array);
render_pic.src = all_pic;


