var input = document.getElementById("searchInput");
var icon = document.getElementById("icon");
var search = document.getElementById("search");

icon.addEventListener("click", function() {
    search.classList.toggle("active");
    input.focus();

});
