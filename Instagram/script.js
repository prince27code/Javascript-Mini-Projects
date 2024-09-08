var array = [
    { dp: 'https://images.unsplash.com/photo-1521676259650-675b5bfec1ae?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', image: 'https://images.unsplash.com/photo-1521620860034-0a3430d856d3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBvdHJhaXR8ZW58MHx8MHx8fDA%3D' },
    { dp: 'https://images.unsplash.com/photo-1625642123545-f0f68b1621e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBvdHJhaXR8ZW58MHx8MHx8fDA%3D', image: 'https://images.unsplash.com/photo-1547701787-1ad8f348080a?q=80&w=1481&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
    { dp: 'https://images.unsplash.com/photo-1521676259650-675b5bfec1ae?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', image: 'https://images.unsplash.com/photo-1521620860034-0a3430d856d3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBvdHJhaXR8ZW58MHx8MHx8fDA%3D' },
    { dp: 'https://images.unsplash.com/photo-1521676259650-675b5bfec1ae?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', image: 'https://images.unsplash.com/photo-1521620860034-0a3430d856d3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBvdHJhaXR8ZW58MHx8MHx8fDA%3D' },
];

var clutter = "";

array.forEach(function(item, index) {
    clutter += `<div class="stories">
                    <img id="${index}" src="${item.dp}" alt="Story ${index + 1}">
                </div>`;
});
document.querySelector('#top').innerHTML = clutter;

var grow = 0;
var top = document.querySelector('#top');
var fullscreen = document.getElementById('fullscreen');
var growth = document.getElementById('growth');
var progressInterval;

// Hide the fullscreen element initially
fullscreen.style.display = "none";

// Toggle fullscreen mode
top.addEventListener('click', function(event) {
    if (event.target.tagName === 'IMG') {
        var index = (event.target.id);
        if (!isNaN(index) && index >= 0 && index < array.length) {
            fullscreen.style.display = "block";
            fullscreen.style.backgroundImage = `url('${array[index].image}')`;

            // Reset progress bar and clear previous interval
            grow = 0;
            growth.style.width = '0%';
            if (progressInterval) {
                clearInterval(progressInterval);
            }

            // Start the progress bar
            progressInterval = setInterval(function() {
                if (grow >= 100) {
                    clearInterval(progressInterval);
                    fullscreen.style.display = "none";
                } else {
                    growth.style.width = `${grow}%`;
                    grow++;
                }
            }, 30);
        }
    }
});
