
'use strict';

//global vars
var button = document.getElementById('submit');

var form = document.getElementById('form');
var radio = document.getElementsByClassName('color');
// var user_array = [];
// console.log('user_array', user_array);
var sigil_array = [];
var sigil_space = document.getElementById('generator');
var ctx = sigil_space.getContext('2d');

//helper functions

//random_number: pulled from a previous project of Merry's.

function random_number (max_num, min_num) {
  var max = Math.ceil(max_num);
  var min = Math.floor(min_num);
  var num = Math.round(Math.random()*(max-min))+min;
  return num;
}

//remove duplicate letters and vowels, match individual letters up with library arrays and select shape at random

function process_sigil(user_string) {
  var user_array = Array.from(new Set(user_string.split('').map(letter => letter.toLowerCase())));
  var to_remove = ['a','e','i','o','u','.','!',',',' '];
  user_array = user_array.filter(letter => !to_remove.includes(letter));
  var sigil_array = [];
  for (var i = 0; i < user_array.length; i++){
    // var thing = eval(`library.${user_array[i]}`);
    var letter = library[user_array[i]];
    sigil_array.push(letter[random_number(3,0)]);
  }
  return sigil_array;
}



/* Generating new shapes:
  circles need 5 indices in their first array, and the string 'arc' as [1]
  rectangles need 4 indicies in their first array, and the string 'rect' as [1]
  lines need 4 indicies in their first array, and the string 'line' as [1]
  triangles need 6 indicies in their first array, and the string 'tri' as [1]

  If you add a new template in the write_sigil function, be sure to incriment the max number in the random_number function a few lines above.
  */

var library ={
  b: [[[250, 275, 25, 0, 2], 'arc'], [[150, 175, 100, 0], 'rect'], [[200, 50, 200, 450], 'line'], [[125,125,125,45,45,125], 'tri']],
  d: [[[300, 375, 25, 0, .5], 'arc'], [[155, 150, 97, 80], 'rect'], [[50, 200, 350, 50], 'line'], [[200,200,200,250,250,200], 'tri']],
  f: [[[200, 50, 35, 0, 2], 'arc'], [[145, 185, 150, 150], 'rect'], [[200, 200, 400, 400], 'line'], [[125,125,125,45,45,125], 'tri']],
  g: [[[275, 275, 35, .80, 1],'arc'], [[190, 180, 42, 77], 'rect'], [[50, 200, 350, 200], 'line'], [[125,125,125,45,45,125], 'tri']],
  h: [[[175, 50, 100, 0, .5],'arc'], [[170, 300, 60, 27], 'rect'], [[200, 50, 200, 450], 'line'], [[125,125,125,45,45,125], 'tri']],
  j: [[[200, 145, 50, 0, 2 ], 'arc'], [[125, 50, 150, 13], 'rect'], [[250, 100, 250, 400], 'line'], [[125,125,125,45,45,125], 'tri']],
  k: [[[200, 270, 75, .15, 1], 'arc'], [[170, 200, 20, 2], 'rect'], [[200, 50, 200, 450], 'line'], [[125,125,125,45,45,125], 'tri']],
  l: [[[135, 178, 40, 23, .5], 'arc'], [[120, 178, 4, 31], 'rect'], [[300, 150, 400, 250], 'line'], [[125,125,125,45,45,125], 'tri']],
  m: [[[195, 405, 60, 0, 2], 'arc'], [[170, 60, 69, 41], 'rect'], [[50, 400, 350, 400], 'line'], [[125,125,125,45,45,125], 'tri']],
  n: [[[380, 170, 80, 0, 1], 'arc'], [[65, 1, 32, 129], 'rect'], [[150, 150, 250, 150], 'line'], [[125,125,125,45,45,125], 'tri']],
  p: [[[310, 40, 35, 55, .5], 'arc'], [[165, 60, 64, 142], 'rect'], [[300, 200, 300, 450], 'line'], [[125,125,125,45,45,125], 'tri']],
  q: [[[200, 390, 80, 0, 2], 'arc'], [[160, 104, 89, 120], 'rect'], [[100, 500, 200, 500], 'line'], [[125,125,125,45,45,125], 'tri']],
  r: [[[90, 35, 8, 23, 1], 'arc'], [[123, 135, 132, 19], 'rect'], [[200, 150, 300, 250], 'line'], [[125,125,125,45,45,125], 'tri']],
  s: [[[25, 330, 70, 35, .5], 'arc'], [[130, 190, 129, 54], 'rect'], [[200, 50, 200, 450], 'line'], [[125,125,125,45,45,125], 'tri']],
  t: [[[75, 75, 15, 0, 2], 'arc'], [[170, 89, 47, 139], 'rect'], [[200, 0, 200, 500], 'line'], [[125,125,125,45,45,125], 'tri']],
  v: [[[200, 75, 40, .15, 1], 'arc'], [[140, 400, 124, 147], 'rect'], [[200, 150, 200, 250], 'line'], [[125,125,125,45,45,125], 'tri']],
  w: [[[200, 75, 10, 86, .5], 'arc'], [[182, 69, 38, 3], 'rect'], [[150, 250, 300, 250], 'line'], [[125,125,125,45,45,125], 'tri']],
  x: [[[330, 85, 95, 0, 2], 'arc'], [[72, 32, 53, 16], 'rect'], [[50, 250, 350, 250], 'line'], [[125,125,125,45,45,125], 'tri']],
  y: [[[280, 300, 100, 0, 1], 'arc'], [[66, 86, 91, 11], 'rect'], [[100, 50, 100, 150], 'line'], [[125,125,125,45,45,125], 'tri']],
  z: [[[15, 2, 380, 100, .5], 'arc'], [[48, 140, 75, 128], 'rect'], [[50, 100, 150, 100, 'line'], [[125,125,125,45,45,125], 'tri']],

};

function write_sigil(sigil_array){
  ctx.clearRect(0,0,400,500);
  ctx.beginPath();
  for (var l = 0; l < sigil_array.length; l ++){
    if (sigil_array[l][1] === 'rect'){
      ctx.rect(sigil_array[l][0][0], sigil_array[l][0][1], sigil_array[l][0][2], sigil_array[l][0][3]);
    }
    else if (sigil_array[l][1] === 'arc'){
      ctx.arc(sigil_array[l][0][0], sigil_array[l][0][1], sigil_array[l][0][2], sigil_array[l][0][3], sigil_array[l][0][4] * Math.PI);
    }
    else if (sigil_array[l][1] === 'line'){
      ctx.moveTo(sigil_array[l][0][0], sigil_array[l][0][1]);
      ctx.lineTo(sigil_array[l][0][2], sigil_array[l][0][3]);
    }
    else if (sigil_array[l][1] === 'tri'){
      ctx.moveTo(sigil_array[l][0][0], sigil_array[l][0][1]);
      ctx.lineTo(sigil_array[l][0][2], sigil_array[l][0][3]);
      ctx.lineTo(sigil_array[l][0][4], sigil_array[l][0][5]);
      ctx.closePath();   
    }
    ctx.stroke();
  }
}

var test = [];
var save_button = document.getElementById('save');
save_button.addEventListener('click', function(event){
  event.preventDefault();
  var new_img = sigil_space.toDataURL();
  test.push(new_img);
  console.log(test);
  if(localStorage.getItem('pic')){
    console.log(test);
    test.push(JSON.parse(localStorage.getItem('pic')));
    console.log(test);
  }
  localStorage.setItem('pic', JSON.stringify(test));
});

//, select a random set of coordinates from the array and push taht to the array of "to be rendered"
//when we have run through the entire array, select random starting coordinates for each shape, and render them to the canvas, uing any colors user has selected via radio buttons.

//object instantnation(necessary?)

//event lisiteners
var left = document.querySelector('.left');
var right = document.querySelector('.right');
var container = document.querySelector('.container');

var target_left_arrow = document.getElementById('left-arrow');
var target_right_arrow = document.getElementById('right-arrow');

left.addEventListener('click',() => {
  target_right_arrow.src = ('/img/right.png');
  container.classList.add('click-left');
});

var split_screen_right = function(event){
  if(event.target.id === 'right-arrow'){
    container.classList.remove('click-left');
    target_right_arrow.src = ('');
  }
};

left.addEventListener('click',split_screen_right);


right.addEventListener('click',() => {
  container.classList.add('click-right');
  target_left_arrow.src = ('/img/left.png');
});

var split_screen_left = function(event){
  if(event.target.id === 'left-arrow'){
    container.classList.remove('click-right');
    target_left_arrow.src = ('');
  }
};

right.addEventListener('click', split_screen_left);

var submit = document.getElementById('submit');

function render_sigil(event){
  event.preventDefault();
  var user_string = document.getElementById('text-input').value;
  console.log('user_string', user_string);

  var sigil_array = process_sigil(user_string);

  console.log(sigil_array);
  write_sigil(sigil_array);

}


// Saving sigils made into local storage

// localStorage.setItem('sigil', JSON.stringify(sigil_array));
// localStorage.getItem('sigil');
//radio buttons
var moods = document.getElementById('form');
var mood_value;

function handle_mood(color_selection){
  color_selection.preventDefault();
  if(document.getElementById('happy').checked){
    mood_value = document.getElementById('happy').value;
  }else if(document.getElementById('chill').checked){
    mood_value = document.getElementById('chill').value;
  }else if(document.getElementById('chaotic').checked){
    mood_value = document.getElementById('chaotic').value;
  }else if(document.getElementById('sad').checked){
    mood_value = document.getElementById('sad').value;
  }
  return(mood_value);
}

function change_color(render_color_theme){
  if(mood_value === 'happy'){
    ctx.strokeStyle = '#f4cb42';
    sigil_space.style.backgroundImage = 'url(/img/happy.jpg)';

  }else if(mood_value === 'chill'){
    ctx.strokeStyle = '#185096';
    sigil_space.style.backgroundImage = 'url(/img/chill.jpg)';

  }else if(mood_value === 'chaotic'){
    ctx.strokeStyle = '#eae8ef';
    sigil_space.style.backgroundImage = 'url(/img/chaotic3.jpg)';

  }else if(mood_value === 'sad'){
    ctx.strokeStyle = '#0a6077';
    sigil_space.style.backgroundImage = 'url(/img/sad3.jpg)';

  }
}

moods.addEventListener('submit', function(event){
  handle_mood(event);
  change_color(event);
  render_sigil(event);

});
// store rendered sigils to local storage
// set user generated sigil and user_string into local storage

//init
