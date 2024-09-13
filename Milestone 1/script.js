//import button through button id and store in variable
var toggleButton = document.getElementById("toggle-skills");
var skills = document.getElementById("Skills");
//add event listener, its wait untill user press button
//add annonymous function 
//none = display of skills is hidden
//block = show/visible
toggleButton.addEventListener('click', function () {
    if (skills.style.display === "none") {
        skills.style.display = "block";
    }
    else {
        skills.style.display = "none";
    }
});
