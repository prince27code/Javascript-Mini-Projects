var left = document.getElementById("left");
var right = document.getElementById("right");
var overlay1 = document.getElementById("overlay1");
var overlay2 = document.getElementById("overlay2");
var leftbutton= document.getElementById("leftbutton");
var rightbutton= document.getElementById("rightbutton");

leftbutton.addEventListener("click", function() {
  overlay1.style.display = "none";
  left.style.width = "80%";
  left.style.transition="linear 0.4s";
});

rightbutton.addEventListener("click", function() {
    overlay2.style.display = "none";
    right.style.width = "80%";
    right.style.transition="linear 0.4s";
  });