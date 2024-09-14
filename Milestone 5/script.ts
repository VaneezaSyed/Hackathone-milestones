//get references to the form and display area 
//import form and display

const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplay = document.getElementById('resume-display') as HTMLDivElement;
const shareableLinkContainer = document.getElementById("shareable-link-container") as HTMLDivElement;
const shareableLinkElement = document.getElementById("shareable-link") as HTMLAnchorElement;
const downloadPdfButton = document.getElementById("download-pdf") as HTMLButtonElement;


//Handle form submission /button
form.addEventListener("submit", (event:Event) =>{
    event.preventDefault();  //prevent page reload

    //now collect user input values
    const username = (document.getElementById("username") as HTMLInputElement).value;
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const contact = (document.getElementById("phone") as HTMLInputElement).value;
    const education = (document.getElementById("education") as HTMLTextAreaElement).value;
    const experience = (document.getElementById("experience") as HTMLTextAreaElement).value;
    const skills = (document.getElementById("skills") as HTMLTextAreaElement).value;

    //save form data in local Storage with the username as the key 
    const resumeData = {
        name,
        email,
        contact,
        education,
        experience,
        skills
    };
    localStorage.setItem(username, JSON.stringify(resumeData));

    //generate resume content dynamically
    const htmlResume = `
    <h2><b>Editable Resume</b></h2>
    <h3>Personal Information</h3>
    <p><b>Name:</b><span contenteditable='true'>${name}</span ><p>
    <p><b>Email:</b><span contenteditable='true'>${email}</span><p>
    <p><b>Contact No:</b><span contenteditable='true'>${contact}</span><p>
    
    <h3>Education</h3>
    <p contenteditable='true'>${education}</p>
    
    <h3>Experience</h3>
    <p contenteditable='true'>${experience}</p>
    
    <h3>Skills</h3>
    <p contenteditable='true'>${skills}</p>`;


    //Display generated resume
    
    resumeDisplay.innerHTML = htmlResume;

    //generate a shareable URL with username only
    const shareableURL = `${window.location.origin}?username=${encodeURIComponent(username)}`;

    //display the shareable link
    shareableLinkContainer.style.display = 'block';
    shareableLinkElement.href = shareableURL;
    shareableLinkElement.textContent = shareableURL;
});

//pdf download
downloadPdfButton.addEventListener('click',()=>{
    //its open the print dialog and allow user to save it as pdf
    window.print();
});

//prefill the form based on username in the URL
window.addEventListener('DOMContentLoaded', ()=>{
    const urlParams = new URLSearchParams(window.location.search);
    const username = urlParams.get('username');

    if(username) {
        const savedResumeData = localStorage.getItem(username);

        if (savedResumeData) {
            const resumeData=JSON.parse(savedResumeData);
            (document.getElementById("username") as HTMLInputElement).value = username  ;
            (document.getElementById("name") as HTMLInputElement).value = resumeData.name;
            (document.getElementById("email") as HTMLInputElement).value = resumeData.email;
            (document.getElementById("phone") as HTMLInputElement).value = resumeData.contact;
            (document.getElementById("education") as HTMLTextAreaElement).value = resumeData.education;
            (document.getElementById("experience") as HTMLTextAreaElement).value = resumeData.experience;
            (document.getElementById("skills") as HTMLTextAreaElement).value = resumeData.skills;

        }
    }
});
