
let footer = document.createElement('footer');
document.body.appendChild(footer);

// Create variables for current date and year
let today = new Date();
let thisYear = today.getFullYear();

// Create paragraph element for copyright text
let copyright = document.createElement('p');

// Set inner HTML of copyright element
copyright.innerHTML = `Erjan Asyl &copy; ${thisYear}`;

// Append copyright element to footer
footer.appendChild(copyright);

// technical skills by creating an Array of String values and store it in a variable
let skills = ["JavaScript, CSS, HTML, GitHUB, GitLab, Docker, Jenkins, Kubernetes, Terraform, Ansible, AWS, Azure, GCP, OpenShift, Grafana, Prometheos"];

// Create a variable named skillsSection and use "DOM Selection" to select the skills section by id
let skillsSection = document.querySelector("#Skills");

// Create a variable named skillsList and use "DOM Selection" to query the skillsSection to select the <ul> element 
let skillsList = skillsSection.querySelector('ul')

// Create a for loop to iterate over skills Array
for (let i = 0; i < skills.length; i++) {
    // create a new list item (li)
    let skill = document.createElement ('li');
    // set the inner text to the current Array element
    skill.innerText = skills[i];
    // append the skill element to the skillsList element
    skillsList.appendChild(skill);

}
// 
// Lesson #14   ###################################################################
// 
// Select the leave_message form
const messageForm = document.querySelector('[name=leave_message]');

// Add event listener for the submit event
    messageForm.addEventListener("submit", (event)  => {
    // Prevent the default form submission behavior
        event.preventDefault()
    console.log(event.target.usersName.value);

    // Retrieve form field values
    const usersName = event.target.usersName.value;
    const usersEmail = event.target.usersEmail.value;
    const usersMessage = event.target.usersMessage.value;

    // Log form field values
    console.log("Name:", usersName);
    console.log("Email:", usersEmail);
    console.log("Message:", usersMessage);

   

    // Select the message section and message list
    const messageSection = document.querySelector('#messages');
    const messageList = messageSection.querySelector('ul');
   
    if (messageSection.style.display === 'none') {
        messageSection.style.display = 'block'
    }
    // Create a new message item
    const newMessage = document.createElement('li');
    newMessage.innerHTML = `
        <a href="mailto:${usersEmail}">${usersName}</a>: 
        <span>${usersMessage}</span>
    `;

    // Create a remove button
    const removeButton = document.createElement('button');
    removeButton.innerText = "Remove";
    removeButton.type = "button";
    
    // Add event listener to the remove button
    removeButton.addEventListener('click', function() {
        // Remove the message entry from the DOM
        const entry = removeButton.parentNode;
        entry.remove();
    });
    // create a edit button
    const editButton = document.createElement('button');
    editButton.innerText ="Edit";
    editButton.type = "button";

    // add event listener
    editButton.addEventListener("click", function() {
        // edit message
        const newMessage = prompt("Enter new/modified message:");
        if (newMessage !== null) {
            span.innerText = newMessage;
        }
    });

    // Append edit button to the newMessage element
    newMessage.appendChild(editButton);
    

    // Append remove button to the new message
    newMessage.appendChild(removeButton);

    // Append new message to the message list
    messageList.appendChild(newMessage);
    
    console.log(messageList.children.length);
    
      
     // Clear the form after submission
     console.log(messageSection)
     messageForm.reset();
});