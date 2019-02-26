
'use strict';


//global vars

var user_string = submit.textContent
var user_array = [];
var sigil_array = [];


//helper functions

//random_number: pulled from a previous project of Merry's.

function random_number (max_num, min_num) {
  var max = Math.ceil(max_num);
  var min = Math.floor(min_num);
  var num = Math.floor(Math.random()*(max-min+1))+min;
}

//remove duplicate letters and vowels, match individual letters up with library arrays and select shape at random

function process_sigil() {
user_array = array.from(newSet(user_array.split('')));
user_array.join(a,e,i,o,u);
for (i = 0; i < user_array.length; i++){
  eval('library.${user_array[i]}');
  //pull random_number shape from the library, store in array till ready to render, 
}
};

//constructor(necessary? will we just have the one object?)
var library ={

  b: [ctx.arc(150, 75, 25, 0, 2 * Math.PI), ctx.rect(150, 75, 100, 0)],
  c: [ctx.arc(100, 50, 35, .60, 1 * Math.PI), ctx.rect(150, 75, 25, 50)],
  d: [ctx.arc(150, 75, 25, 0, .5 * Math.PI), ctx.rect(100, 150, 97, 80)],
  f: [ctx.arc(100, 50, 35, 0, 2 * Math.PI), ctx.rect(85, 20, 150, 150)],
  g: [ctx.arc(50, 100, 35, .80, 1 * Math.PI), ctx.rect(30, 100, 42, 77)],
  h: [ctx.arc(100, 50, 100, 0, .5 * Math.PI),ctx.rect(70, 20, 60, 27)],
  j: [ctx.arc(200, 45, 50, 0, 2 * Math.PI), ctx.rect(15, 101, 150, 13)],
  k: [ctx.arc(150, 70, 84, .5, 1 * Math.PI), ctx.rect(69, 6, 20, 2)],
  l: [ctx.arc(75, 100, 40, 23, .5 * Math.PI), ctx.rect(12, 59, 4, 31)],
  m: [ctx.arc(175, 50, 60, 0, 2 * Math.PI), ctx.rect(37, 57, 69, 41)],
  n: [ctx.arc(100, 150, 80, 0, 1 * Math.PI), ctx.rect(65, 1, 32, 129)],
  p: [ctx.arc(100, 50, 35, 55, .5 * Math.PI), ctx.rect(67, 59, 142, 64)],
  q: [ctx.arc(50, 200, 80, 0, 2 * Math.PI), ctx.rect(70, 104, 89, 120)],
  r: [ctx.arc(50, 35, 8, 23, 1 * Math.PI), ctx.rect(123, 135, 132, 19)],
  s: [ctx.arc(25, 130, 70, 35, .5 * Math.PI), ctx.rect(19, 113, 129, 54)],
  t: [ctx.arc(39, 100, 15, 0, 2 * Math.PI), ctx.rect(115, 89, 47, 139)],
  v: [ctx.arc(150, 150, 40, .15, 1 * Math.PI), ctx.rect(49, 93, 124, 147)],
  w: [ctx.arc(200, 75, 10, 86, .5 * Math.PI), ctx.rect(122, 69, 38, 3)],
  x: [ctx.arc(100, 85, 95, 0, 2 * Math.PI), ctx.rect(72, 32, 53, 16)],
  y: [ctx.arc(100, 100, 100, 0, 1 * Math.PI), ctx.rect(66, 86, 91, 11)],
  z: [ctx.arc(8, 2, 100, 100, .5 * Math.PI), ctx.rect(48, 140, 75, 128)],

};
//, select a random set of coordinates from the array and push taht to the array of "to be rendered"
//when we have run through the entire array, select random starting coordinates for each shape, and render them to the canvas, uing any colors user has selected via radio buttons.

//object instantnation(necessary?)

//event lisiteners
var left = document.querySelector('.left');
var right = document.querySelector('.right');
var container = document.querySelector('.container');

left.addEventListener('mouseenter',() => {
  container.classList.add('hover-left');
});

left.addEventListener('mouseleave',() => {
  container.classList.remove('hover-left');
});

right.addEventListener('mouseenter',() => {
  container.classList.add('hover-right');
});

right.addEventListener('mouseleave',() => {
  container.classList.remove('hover-right');
});

  //submit button
var submit = document.getElementById('submit');

submit.addEventListener('event',process_sigil());

  
  //radio buttons
var radio = document.getElementsByClassName('color');

radio.addEventListener('event',);

//store rendered sigils to local storage
//set user generated sigil and user_string into local storage

//init

