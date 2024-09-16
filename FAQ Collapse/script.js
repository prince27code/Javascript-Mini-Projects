const opens = document.querySelectorAll('.ri-arrow-drop-down-line');
const closes = document.querySelectorAll('.ri-close-line');
const faqbox = document.querySelectorAll('.faqbox');

opens.forEach((open, index) => {
    open.addEventListener('click',  (event) => {
       
        console.log(`${index}`);
        faqbox[index].classList.add('active');

    });
    
});


closes.forEach((open, index) => {
    open.addEventListener('click',  (event) => {
       
        console.log(`${index}`);
        faqbox[index].classList.remove('active');

    });
    
});