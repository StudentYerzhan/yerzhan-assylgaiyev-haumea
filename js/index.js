
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