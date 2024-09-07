var acc = document.querySelector("#acc")
var rej = document.querySelector("#rej")
var three= document.querySelector('#three')
var h4= three.querySelector('h4')

acc.addEventListener("click", function(){
    h4.innerHTML="Friends";
    h4.style.color="green";
})

rej.addEventListener("click", function(){
    h4.innerHTML="REJECTED";
    h4.style.color="red";
})
    
