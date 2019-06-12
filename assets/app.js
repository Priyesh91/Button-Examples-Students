console.log("Testing to see if file is linked")

//function for vanilla js, function executed in index.htlm through onclick
function vjsAlert() {
  alert("alert triggered by vanilla js")
};

//audio playing with vanilla js
var audio = new Audio("../Yeah_Boy_Start.mp3");
function vjsSound() {
  audio.play();
};

//audio playing with vanilla js workaround for github pages
var audioContainer = document.getElementById("audioContainer");
function vjsSoundWorkAround() {
  audioContainer.play();
}

//jQuery trigger alert
$(".jQ-1").on("click", function() {
  alert("alert triggered by jQuery");
});

//jQuery trigger sound
$(".jQ-2").on("click", function() {
  audio.play();
})

