
'use strict';
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

//global vars
  //user_string = user input;
  //user_array = [];

//helper functions
//random_number pulled from a previous project of mine.

function random_number (max_num, min_num) {
  var max = Math.ceil(max_num);
  var min = Math.floor(min_num);
  var num = Math.floor(Math.random()*(max-min+1))+min;
}
  //need to iterate through user string and turn it into individual letters.
  // then need to remove vowels and duplicate letters

//user_array = array.from(user_string);
//user_array.join(a,e,i,o,u)
//arr.sort(user_array);
//var individual_letters = user_array[Symbol.iterator]();


// else if individual_letters = duplicate, only keep first instance

//constructor(necessary? will we just have the one object?)
var library ={

  b: [],
  c: [],
  d: [],
  f: [],
  g: [],
  h: [],
  j: [],
  k: [],
  l: [],
  m: [],
  n: [],
  p: [],
  q: [],
  r: [],
  s: [],
  t: [],
  v: [],
  w: [],
  x: [],
  y: [],
  z: [],

};
//when we have an array of unique consinents, compare them to the properties of library. when we find a match between a character and the character name of a property, select a random set of coordinates from the array and push taht to the array of "to be rendered"
//when we have run through the entire array, select random starting coordinates for each shape, and render them to the canvas, uing any colors user has selected via radio buttons.

//object instantnation(necessary?)

//event lisiteners
  //submit button
  
  //radio buttons

//store rendered sigils to local storage

//init

