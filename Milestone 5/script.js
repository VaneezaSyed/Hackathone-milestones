//get references to the form and display area 
//import form and display
var form = document.getElementById('resume-form');
var resumeDisplay = document.getElementById('resume-display');
var shareableLinkContainer = document.getElementById("shareable-link-container");
var shareableLinkElement = document.getElementById("shareable-link");
var downloadPdfButton = document.getElementById("download-pdf");
//Handle form submission /button
form.addEventListener("submit", function (event) {
    event.preventDefault(); //prevent page reload
    //now collect user input values
    var username = document.getElementById("username").value;
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var contact = document.getElementById("phone").value;
    var education = document.getElementById("education").value;
    var experience = document.getElementById("experience").value;
    var skills = document.getElementById("skills").value;
    //save form data in local Storage with the username as the key 
    var resumeData = {
        name: name,
        email: email,
        contact: contact,
        education: education,
        experience: experience,
        skills: skills
    };
    localStorage.setItem(username, JSON.stringify(resumeData));
    //generate resume content dynamically
    var htmlResume = "\n    <h2><b>Editable Resume</b></h2>\n    <h3>Personal Information</h3>\n    <p><b>Name:</b><span contenteditable='true'>".concat(name, "</span ><p>\n    <p><b>Email:</b><span contenteditable='true'>").concat(email, "</span><p>\n    <p><b>Contact No:</b><span contenteditable='true'>").concat(contact, "</span><p>\n    \n    <h3>Education</h3>\n    <p contenteditable='true'>").concat(education, "</p>\n    \n    <h3>Experience</h3>\n    <p contenteditable='true'>").concat(experience, "</p>\n    \n    <h3>Skills</h3>\n    <p contenteditable='true'>").concat(skills, "</p>");
    //Display generated resume
    resumeDisplay.innerHTML = htmlResume;
    //generate a shareable URL with username only
    var shareableURL = "".concat(window.location.origin, "?username=").concat(encodeURIComponent(username));
    //display the shareable link
    shareableLinkContainer.style.display = 'block';
    shareableLinkElement.href = shareableURL;
    shareableLinkElement.textContent = shareableURL;
});
//pdf download
downloadPdfButton.addEventListener('click', function () {
    //its open the print dialog and allow user to save it as pdf
    window.print();
});
//prefill the form based on username in the URL
window.addEventListener('DOMContentLoaded', function () {
    var urlParams = new URLSearchParams(window.location.search);
    var username = urlParams.get('username');
    if (username) {
        var savedResumeData = localStorage.getItem(username);
        if (savedResumeData) {
            var resumeData = JSON.parse(savedResumeData);
            document.getElementById("username").value = username;
            document.getElementById("name").value = resumeData.name;
            document.getElementById("email").value = resumeData.email;
            document.getElementById("phone").value = resumeData.contact;
            document.getElementById("education").value = resumeData.education;
            document.getElementById("experience").value = resumeData.experience;
            document.getElementById("skills").value = resumeData.skills;
        }
    }
});
