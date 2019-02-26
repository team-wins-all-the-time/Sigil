'use strict';
//get from local storage
// 1. Target element i want to put local storage in
// 2. Acess Local Storage
// 3. Put items from local storage in targeted id
var sigil_space = document.getElementById('generator');
var ctx = sigil_space.getContext('2d') ;
var retrieve = localStorage.getItem('pic')
var sigil_array = JSON.parse(retrieve);
console.log(sigil_array);

var render_pic = document.getElementById('test')
render_pic.src = sigil_array;

var img_el = document.createElement('img');
var all_pic = [];
all_pic.push(sigil_array);
render_pic.src = all_pic;
// function write_sigil(sigil_array){
//     ctx.beginPath();
//     for (var l = 0; l < sigil_array.length; l ++){
//       console.log(sigil_array);
//       if (sigil_array[l][1] === 'rect'){
//         ctx.rect(sigil_array[l][0][0], sigil_array[l][0][1], sigil_array[l][0][2], sigil_array[l][0][3]);
//       }
//       else if (sigil_array[l][1] === 'arc'){
//         ctx.arc(sigil_array[l][0][0], sigil_array[l][0][1], sigil_array[l][0][2], sigil_array[l][0][3], sigil_array[l][0][4] * Math.PI);
//       }
//     }
//     console.log(sigil_array);
//     ctx.stroke();
//     // JSON.parse(localStorage.getItem(sigil_array));
//   }

//   write_sigil();
//   var right = document.querySelector('.right');

