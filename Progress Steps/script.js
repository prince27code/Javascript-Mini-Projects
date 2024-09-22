const progressline = document.querySelector(".progress-line");
const circles = document.querySelectorAll(".circle");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

let currentCircle = 1;

next.addEventListener("click", () => {
    currentCircle++;
    if(currentCircle>circles.length)
    {
        currentCircle = circles.length
    }
    update();
});

prev.addEventListener("click", () => {
    currentCircle--;
    if(currentCircle<1)
    {
        currentCircle = 1
    }
    update();
});

function update() {
    circles.forEach((circle, index) => {
        if(index < currentCircle)
        {
            circle.classList.add("active");
        }
        else
        {
            circle.classList.remove("active");
        }
     });

     const actives = document.querySelectorAll(".active")
     progressline.style.width = ((actives.length-1) / (circles.length-1))* 100 + '%';
 
     if(currentCircle == 1)
     {
         prev.disabled = true;
     }
     else if(currentCircle == circles.length)
     {
        next.disabled = true;
     }
     else
     {
        prev.disabled = false;
        next.disabled = false;
     }
    }

