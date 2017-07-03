//alert(minutesX);

var intervalHandleX;
var minutesX;
var secondsX;

var inputAreaX = document.getElementById("inputAreaX");
var StartbuttonX = document.getElementById("StartbuttonX");
var timeDisplayX = document.getElementById("timeDisplayX");
var inputMinutesX = document.getElementById("inputMinutesX");

function resetPage(){
    inputAreaX.style.display = "block";
}

function tickX(){
    var minutesDisplayX = Math.floor(secondsX / 60);
    var secondsDisplayX = secondsX - (minutesDisplayX * 60);
    
    if(secondsDisplayX < 10){
        secondsDisplayX = "0" + secondsDisplayX;
    }
    
    var messageX = minutesDisplayX + ":" + secondsDisplayX;
    timeDisplayX.innerHTML = messageX;
    
    if(secondsX == 0){
        alert("Done ya prince!!");
        clearInterval(intervalHandleX);
        resetPage();
    }
    
    secondsX--;
}

function startCountdown(){
    minutesX = inputMinutesX.value;
    
    secondsX = minutesX * 60;
    
    tickX();
    
    intervalHandleX = setInterval(tickX, 1000);
    
    inputAreaX.style.display = "none";
}


window.onload = function(){
    StartbuttonX.onclick = function(){
        startCountdown();
    }
};