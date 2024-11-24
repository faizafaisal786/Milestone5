document.getElementById('resumeForm')?.addEventListener('submit', function(event) {
    event.preventDefault();

    // Get references to form elements using their IDs
    const profilePictureInput = document.getElementById('profilePicture') as HTMLInputElement;
    const nameElement = document.getElementById('name') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const phoneElement = document.getElementById('phone') as HTMLInputElement;
    const addressElement = document.getElementById('address') as HTMLInputElement;
    const educationElement = document.getElementById('education') as HTMLTextAreaElement;
    const experienceElement = document.getElementById('experience')as HTMLTextAreaElement;
    const skillsElement = document.getElementById('skills')as HTMLTextAreaElement;

   

    if ( 
        profilePictureInput && nameElement && emailElement && phoneElement && addressElement && educationElement && experienceElement && skillsElement


      
    ){}
        const name = nameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const address = addressElement.value;
        const education = educationElement.value;
        const experience = experienceElement.value;
        const skills = skillsElement.value;

//





        // Handle profile picture
        const profilePictureFile = profilePictureInput.files?.[0];
        const profilePictureURL = profilePictureFile
         ? URL.createObjectURL(profilePictureFile) 
         : "";


        // Create resume output
        const resumeOutput= `
        <h2>Resume</h2>
        ${
        profilePictureURL 
        ? `<img src="${profilePictureURL}" alt="Profile Picture" class="profilePicture">` 
        : ""
        }
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone Number:</strong> ${phone}</p>
        <p><strong>Address:</strong> ${address}</p>

        <h3>Education</h3>
        <p>${education}</p>

        <h3>Work Experience</h3>
        <p>${experience}</p>

        <h3>Skills</h3>
        <p>${skills}</p>
        `;

////
const downloadLink = document.createElement('a');
downloadLink.href = 'data:text/html;charset=utf-8,' + encodeURIComponent(resumeOutput);
downloadLink.download = "UniquePath"; 
downloadLink.textContent = 'Download as PDF';
downloadLink.textContent = 'Copy Shareable Link';

const resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = 'resumeOutput';
//
resumeOutputElement.appendChild(downloadLink);

resumeOutputElement.style.display = "block";


} else {
console.error('One or more form elements are missing');

//
////display the resume in output container
const resumeOutputElement = document.getElementById("resumeOutput");
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            resumeOutputElement.classList.remove("hidden");

// create container for buttons

const buttonsContainer = document.createElement("div");
buttonsContainer.id ="buttonsContainer";
resumeOutputElement.appendChild(buttonsContainer);

//add download Pdf button
const downloadButton = document.createElement("button");
downloadButton.textContent = "Download as PDF";
downloadButton.addEventListener("click",() => {
    window.print(); //Open the print dialog, allowing the user to save as PDF.
});
buttonsContainer.appendChild(downloadButton);
//add shareable link button
const shareLinkButton = document.createElement("button");
shareLinkButton.textContent = "Copy Shareable Link";
shareLinkButton.addEventListener("click", async () => {
    try{
        //create a unique shareable link (silmulate it in this case)
        const shareableLink = `https://yourdomain.com/resumes/${name.replace(
            /\s+/g,
            "_"
        )}_cv.html`;

        //use clipboard API to copy the shareable link
        await navigator.clipboard.writeText(shareableLink);
        alert("Shareable link copied to clipboard!");
    } catch (err) {
        console.error("Failed to copy link: ",err);
    
        alert("Failed to copy link to clipboard. Please try again.");
    }
});
buttonsContainer.appendChild(shareLinkButton);
} else {
    console.error("The resumeOutput elements container not found");
}


} else {
    console.error("One or more form elements are missing");
    }
    });