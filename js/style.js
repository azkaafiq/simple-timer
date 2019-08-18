// I'm sure theres a million and one much easier ways to do this! But here's how I made it work!

var hoursLabel = document.getElementById("hours");
var minutesLabel = document.getElementById("minutes");
var secondsLabel = document.getElementById("seconds");
var totalSeconds = 0;
var seconds = 0;
var minutes = 0;
var hours = 0;

setInterval(setTime, 1000);

function setTime() {

  // animations 
  if(totalSeconds >= 0 ){
    var element = document.getElementById("seconds");
    element.classList.add("box3-alt"); 
  }
  
  if(totalSeconds % 60 == 0){
    var element = document.getElementById("minutes");
    element.classList.add("box3-alt"); 
  } else {
    var element = document.getElementById("minutes");
    element.classList.remove("box3-alt"); 
  }
  
  if(totalSeconds % 3600 == 0){
    var element = document.getElementById("hours");
    element.classList.add("box3-alt"); 
  } else {
    var element = document.getElementById("hours");
    element.classList.remove("box3-alt"); 
  }

// sets time before the minutes have to reset to 0
  if(minutes < 60){
    seconds = totalSeconds % 60;
    minutes = parseInt(totalSeconds / 60);
    hours = parseInt(totalSeconds / 3600);
    
    secondsLabel.innerHTML = pad(seconds);
    minutesLabel.innerHTML = pad(minutes);
    hoursLabel.innerHTML = pad(hours);  
  } 

  // sets time when the minutes = 60 or are greater than 60
  if (minutes >= 60){
    seconds = totalSeconds % 60;
    hours = parseInt(totalSeconds / 3600);
    minutes = parseInt((totalSeconds / 60) - (hours * 60));
   

    secondsLabel.innerHTML = pad(seconds);
    minutesLabel.innerHTML = pad(minutes);
    hoursLabel.innerHTML = pad(hours); 
  }
  
  ++totalSeconds;
}

// adds the extra 0 in front of the numbers
function pad(val) {  
  var valString = val + "";
  if (valString.length < 2) {
    return "0" + valString;
  } else {
    return valString;
  }
}




