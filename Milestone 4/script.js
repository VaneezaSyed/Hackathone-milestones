//get references to the form and display area 
//import form and display
var form = document.getElementById('resume-form');
var resumeDisplay = document.getElementById('resume-display');
//Handle form submission /button
form.addEventListener("submit", function (event) {
    event.preventDefault(); //prevent page reload
    //now collect user input values 
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var contact = document.getElementById("phone").value;
    var education = document.getElementById("education").value;
    var experience = document.getElementById("experience").value;
    var skills = document.getElementById("skills").value;
    //generate resume content dynamically
    var htmlResume = "\n    <h2><b>Editable Resume</b></h2>\n    <h3>Personal Information</h3>\n    <p><b>Name:</b><span contenteditable='true'>".concat(name, "</span><p>\n    <p><b>Email:</b><span contenteditable='true'>").concat(email, "</span><p>\n    <p><b>Contact No:</b><span contenteditable='true'>").concat(contact, "</span><p>\n    \n    <h3>Education</h3>\n    <p contenteditable='true'>").concat(education, "</p>\n    \n    <h3>Experience</h3>\n    <p contenteditable='true'>").concat(experience, "</p>\n    \n    <h3>Skills</h3>\n    <p contenteditable='true'>").concat(skills, "</p>");
    //Display generated resume
    if (resumeDisplay) {
        resumeDisplay.innerHTML = htmlResume;
    }
});
