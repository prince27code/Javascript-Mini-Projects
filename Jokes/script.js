const jokes = document.getElementById('joke-text');
const button = document.getElementById('generate-joke');
button.addEventListener('click', generateJoke)

generateJoke();
// function generateJoke() {

// const config = {
//     headers: {
//         'Accept': 'application/json',
//     },
// };

// fetch('https://icanhazdadjoke.com',config)
// .then(response => response.json())
// .then(data => {
//     jokes.textContent = data.joke;
// })
// }


//More proper approach
async function generateJoke() {

    const config = {
        headers: {
            'Accept': 'application/json',
        },
    };
    
    const response = await fetch('https://icanhazdadjoke.com',config)
    const data = await response.json();
    
    jokes.textContent = data.joke;
   
 }
    

