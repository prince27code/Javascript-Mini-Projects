const counters = document.querySelectorAll('.counter')  

counters.forEach(counter => {
    const target = parseInt(counter.getAttribute('data-target'))
    const increment = target / 200
    
    counter.innerText = 0
    
    let count = 0
    const timer = setInterval(() => {
        count += increment
        
        if(count >= target)
        {
            clearInterval(timer)
            counter.innerText = target.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        }
        else
        {
            counter.innerText = Math.floor(count).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        }
    }, 10) 
})