//get references to the form and display area 
//import form and display

const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplay = document.getElementById('resume-display') as HTMLDivElement;

//Handle form submission /button
form.addEventListener("submit", (event:Event) =>{
    event.preventDefault();  //prevent page reload

    //now collect user input values 
    const name = (document.getElementById("name") as HTMLInputElement).value
    const email = (document.getElementById("email") as HTMLInputElement).value
    const contact = (document.getElementById("phone") as HTMLInputElement).value
    const education = (document.getElementById("education") as HTMLInputElement).value
    const experience = (document.getElementById("experience") as HTMLInputElement).value
    const skills = (document.getElementById("skills") as HTMLInputElement).value

    //generate resume content dynamically
    const htmlResume = `
    <h2><b>Editable Resume</b></h2>
    <h3>Personal Information</h3>
    <p><b>Name:</b><span contenteditable='true'>${name}</span><p>
    <p><b>Email:</b><span contenteditable='true'>${email}</span><p>
    <p><b>Contact No:</b><span contenteditable='true'>${contact}</span><p>
    
    <h3>Education</h3>
    <p contenteditable='true'>${education}</p>
    
    <h3>Experience</h3>
    <p contenteditable='true'>${experience}</p>
    
    <h3>Skills</h3>
    <p contenteditable='true'>${skills}</p>`;

    //Display generated resume
    if(resumeDisplay){
        resumeDisplay.innerHTML = htmlResume;
    }
})