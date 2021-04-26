"use strict";

var stopButton = document.getElementById("stop");
var startButton = document.getElementById("start");
stopButton.disabled = true;

var input = document.getElementById("input");
var display = document.getElementById("display");

var count = 0;
var speed = 171;
var keep = false;


function disableButton(button){
    button.disabled = true;
    button.style.backgroundColor ="lightgray";
}
function enableButton(button){
    button.disabled = false;
    button.style.backgroundColor ="#FFFFFF";
}
function disableInput(input){
    input.disabled = true;
    input.style.backgroundColor = "lightgray";
}
function enableInput(input){
    input.disabled = false;
    input.style.backgroundColor = "#FFFFFF";
}
function show(){
    count = 0;
    keep = true;
    disableButton(startButton);
    disableInput(input);
    enableButton(stopButton);
    speedread();
}

function stop(){
    disableButton(stopButton);
    enableButton(startButton);
    enableInput(input);
    keep = false;
}
function modifyText(text){
  var splitted = text.split(/[ \t\n]+/);
  var newsent=[""]; // holds array after modification
  var i;
  for(i=0; i<splitted.length; i++){
      var last_character = splitted[i].charAt(splitted[i].length-1)
      if(last_character =='.' || last_character==',' 
         || last_character =='!' || last_character == ';' || last_character==':'){
             var edited = splitted[i].slice(0,-1);
             newsent.push(edited);
             newsent.push(edited); //add it twice to the array so that it gets displayed twice.
      }
      else{
          newsent.push(splitted[i]);
      }
  }
  return newsent;
}
function displayText(text){
    display.innerHTML = text;
}

function speedread(){
    
    var words = modifyText(input.value);
    displayText(words[count]);
    count++;
    if(count >= words.length || keep == false){
        stop();
        return;
    }
    timer();
 
}
function timer(){
    setTimeout(speedread, speed);
}
