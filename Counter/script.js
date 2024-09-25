const counters = document.querySelectorAll('.counter')  

counters.forEach(counter => {
    const target = parseInt(counter.getAttribute('data-target'))
    const increment = target / 200
    
    counter.innerText = 0
    
    let count = 0
    const timer = setInterval(() => {
        count += increment
        
        if (count >= target) {
            counter.innerText = target; // Ensure the final value is set to the target
            clearInterval(timer);
        } else {
            counter.innerText = Math.ceil(count); // Update the counter text
        }
    }, 10) 
})