
'use strict';


//global vars
//user_string = user input;
user_array = [];
sigil_array = [];

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

  b: [(150, 75, 25, 0, 2 * Math.PI),],
  c: [(100, 50, 35, .60, 1 * Math.PI)],
  d: [(150, 75, 25, 0, .5 * Math.PI)],
  f: [(100, 50, 35, 0, 2 * Math.PI)],
  g: [(50, 100, 35, .80, 1 * Math.PI)],
  h: [(100, 50, 100, 0, .5 * Math.PI)],
  j: [(200, 45, 50, 0, 2 * Math.PI)],
  k: [(150, 70, 84, .5, 1 * Math.PI)],
  l: [(75, 100, 40, 23, .5 * Math.PI)],
  m: [(175, 50, 60, 0, 2 * Math.PI)],
  n: [(100, 150, 80, 0, 1 * Math.PI)],
  p: [(100, 50, 35, 55, .5 * Math.PI)],
  q: [(50, 200, 80, 0, 2 * Math.PI)],
  r: [(50, 35, 8, 23, 1 * Math.PI)],
  s: [(25, 130, 70, 35, .5 * Math.PI)],
  t: [(39, 100, 15, 0, 2 * Math.PI)],
  v: [(150, 150, 40, .15, 1 * Math.PI)],
  w: [(200, 75, 10, 86, .5 * Math.PI)],
  x: [(100, 85, 95, 0, 2 * Math.PI)],
  y: [(100, 100, 100, 0, 1 * Math.PI)],
  z: [(8, 2, 100, 100, .5 * Math.PI)],

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

