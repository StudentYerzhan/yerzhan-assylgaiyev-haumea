
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
// Lesson #14###################################################################
// 
// Select the leave_message form
const messageForm = document.forms.leave_message;

// Add event listener for the submit event
messageForm.addEventListener("submit", function(event) {
    // Prevent the default form submission behavior
    event.preventDefault()

    // Retrieve form field values
    const usersName = messageForm.usersName.value;
    const usersEmail = messageForm.usersEmail.value;
    const usersMessage = messageForm.usersMessage.value;

    // Log form field values
    console.log("Name:", usersName);
    console.log("Email:", usersEmail);
    console.log("Message:", usersMessage);

    // Clear the form after submission
    messageForm.reset();

    // Select the message section and message list
    const messageSection = document.querySelector('#messages');
    const messageList = messageSection.querySelector('ul');

    // Create a new message item
    const newMessage = document.createElement('li');
    newMessage.innerHTML = `
        <a href="mailto:${usersEmail}">${usersName}</a>: 
        <span>${usersMessage}</span>
    `;

    // Create a remove button
    const removeButton = document.createElement('button');
    removeButton.innerText = "remove";
    removeButton.type = "button";
    
    // Add event listener to the remove button
    removeButton.addEventListener('click', function() {
        // Remove the message entry from the DOM
        const entry = removeButton.parentNode;
        entry.remove();
    });

    // Append remove button to the new message
    newMessage.appendChild(removeButton);

    // Append new message to the message list
    messageList.appendChild(newMessage);

    // Check if the messageList is empty
    if (messageList.children.length === 0) {
    // Hide the messages section
    messageSection.style.display = 'none';
    }    else {
    // Show the messages section
    messageSection.style.display = 'block';
    }

});
