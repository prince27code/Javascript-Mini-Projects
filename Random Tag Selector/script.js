 // Select all tags
const button = document.getElementById('button');
const textarea = document.getElementById('txt')
const maintag = document.querySelectorAll('.tags')
const tags = document.querySelectorAll('.tag')

textarea.addEventListener('keyup',(event)=>{
    generateTags()
})

function generateTags()
{
const words = (event.target.value).split(',').filter(word=>word.length>0).map(word=>word.trim())
maintag.forEach(mt=>{
     mt.innerHTML=' '
})
words.forEach(word=>{
     const divelem = document.createElement('div')
     divelem.classList.add('tag')
     divelem.innerHTML=word
     maintag.forEach(mt=>{
        mt.append(divelem)
       
     })
    
      
})
}





button.addEventListener('click', () => {
    randomSelector()
});

function randomSelector()
{
    let previousTag = null; // Tracking the previous highlighted tag
    const tags = document.querySelectorAll('.tag');  //(Updating tags to ensure the NodeList is current)(IMP)

    const interval = setInterval(() => {
        // Random Tags Selector
        const randomIndex = Math.floor(Math.random() * tags.length);
        const randomTag = tags[randomIndex]; // Selecting a random tag
        console.log(tags)
        // If there is a previously highlighted tag, remove the highlight
        if (previousTag) {
            previousTag.classList.remove('highlight');
        }

        // Highlighter
        randomTag.classList.add('highlight');
        previousTag = randomTag;
    }, 100);

    // Stop to a tag and highlight it after 3 seconds
    setTimeout(() => {
        clearInterval(interval); // Stop the interval

        // Ensure the last tag is unhighlighted before highlighting the final tag
        if (previousTag) {
            previousTag.classList.remove('highlight');
        }

        // Select one final random tag to highlight
        const finalIndex = Math.floor(Math.random() * tags.length);
        const finalTag = tags[finalIndex]; // Select the final tag
        finalTag.classList.add('highlight'); // Highlight the final tag
    }, 3000); 
}

