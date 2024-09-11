
const eventkey = document.querySelector('#eventkey');
const eventkeycode = document.querySelector('#eventkeycode');
const eventcode = document.querySelector('#eventcode');

window.addEventListener('keydown',(event)=>{
    eventkey.placeholder= event.key;
    eventkeycode.placeholder = event.keyCode;
    eventcode.placeholder= event.code;
    console.log(event);  
});
