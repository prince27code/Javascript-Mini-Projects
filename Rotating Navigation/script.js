var open = document.querySelector('#open');
var close = document.querySelector('#close');
var main = document.querySelector('#main');
var nav = document.querySelector('#nav');

open.addEventListener('click', function() {
    main.classList.add('show-nav');
});

close.addEventListener('click', function() {

    main.classList.remove('show-nav');
 
});
