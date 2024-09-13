//import button through button id and store in variable
const toggleButton = document.getElementById("toggle-skills") as HTMLButtonElement
const skills = document.getElementById("Skills") as HTMLElement

//add event listener, its wait untill user press button
//add annonymous function 
//none = display of skills is hidden
//block = show/visible

toggleButton.addEventListener('click' , ()=> {
    if(skills.style.display === "none"){
        skills.style.display = "block"
    }else{
        skills.style.display = "none"
    }
});

//now TS file convert into JS

