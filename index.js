// Import packages 
const inquirer = require('inquirer');
const fs = require('fs');


// Import class 
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

// Import HTML templates 

// Empty array for team members
const team = [];

// Manager details 
const addManager = [

    {
        name: 'name',
        type: 'input',
        message: 'Who is the manager of this team?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter the manager's name!")
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: "Please enter the manager's ID:",
        validate: idInput => {
            if (isNaN(idInput)) {
                console.log("You need to enter the manager's ID!")
                return false;
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the manager's email address?",
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log("Please enter manager's email address!")
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: "What is the manager's office number?",
        validate: phoneInput => {
            if (isNaN(phoneInput)) {
                console.log('Please enter an office number!')
                return false;
            } else {
                return true;
            }
        }
    },
    {
        name: 'upNext',
        type: 'list',
        choices: ['Add Engineer', 'Add Intern', 'My team is complete!'],
        message: 'What would you like to do next?',
        validate: nextInput => {
            if (nextInput) {
                return true;
            } else {
                console.log('Please choose one.');
                return false;
            }
        }
    },
];
// Add new engineer
const addEngineer = [
    {
        name: 'name',
        type: 'input',
        message: "Please enter the name of the engineer:",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter the engineer's name!")
                return false;
            }
        }
    },
    {
        name: 'id',
        type: 'input',
        message: "What is the engineer's ID?",
        validate: idInput => {
            if (isNaN(idInput)) {
                console.log("Please enter the engineer's ID!")
                return false;
            } else {
                return true;
            }
        }
    },
    {
        name: 'email',
        type: 'input',
        message: "What is the engineer's email address?",
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log("Please enter engineer's email address!")
                return false;
            }
        }
    },
    {
        name: 'github',
        type: 'input',
        message: "Please enter the engineer's Github username:",
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log("You need to enter the engineer's Github username!")
                return false;
            }
        }
    },
    {
        name: 'upNext',
        type: 'list',
        choices: ['Add Engineer', 'Add Intern', 'My team is complete!'],
        message: 'What would you like to do next?',
        validate: nextInput => {
            if (nextInput) {
                return true;
            } else {
                console.log('Please choose one.');
                return false;
            }
        }
    },
];

// Add intern
const addIntern = [
    {
        name: 'name',
        type: 'input',
        message: "What is the intern's name?",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter the intern's name!")
                return false;
            }
        }
    },
    {
        name: 'id',
        type: 'input',
        message: "What is the intern's employee ID?",
        validate: idInput => {
            if (isNaN(idInput)) {
                console.log("Please enter the intern's ID!")
                return false;
            } else {
                return true;
            }
        }
    },
    {
        name: 'email',
        type: 'input',
        message: "What is the intern's email address?",
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log("Please enter intern's email address!")
                return false;
            }
        }
    },
    {
        name: 'school',
        type: 'input',
        message: "What college or university does the intern attend?",
        validate: schoolInput => {
            if (schoolInput) {
                return true;
            } else {
                console.log("Please enter the name of the school!")
                return false;
            }
        }
    },
    {
        name: 'upNext',
        type: 'list',
        choices: ['Add Engineer', 'Add Intern', 'My team is complete!'],
        message: 'What would you like to do next?',
        validate: nextInput => {
            if (nextInput) {
                return true;
            } else {
                console.log('Please choose one.');
                return false;
            }
        }
    },
];

// Initialize application
ask(addManager);

// Cycle through questions if member needs to be added
function ask(questionArr) {
    inquirer
        .prompt(questionArr)
        .then((member) => {
            team.push(member);

            if (member.upNext === 'Add Engineer') {
                ask(addEngineer);
            } else if (member.upNext === 'Add Intern') {
                ask(addIntern);
            } else {
                createProfiles(team);
            }
        })
        .catch((err) => console.log(err));
}


function createProfiles(team) {

    const profiles = team.map((member) => {
        const { name, id, email } = member;

        // If you're adding a manager, ask for office number
        if (member.hasOwnProperty('officeNumber')) {
            const { officeNumber } = member;
            return new Manager(name, id, email, officeNumber);
        }

        // if you're adding an engineer, as for github
        if (member.hasOwnProperty('github')) {
            const { github } = member;
            return new Engineer(name, id, email, github);
        }

        // if you're adding an intern, ask for school
        if (member.hasOwnProperty('school')) {
            const { school } = member;
            return new Intern(name, id, email, school);
        }
    });

    // Generate HTML from the profiles made
    generateHtml(profiles);
}

function generateHtml(profiles) {
    let profileCards = '';
    profiles.forEach((profile) => {
        if (profile instanceof Manager) {
            const card = addManagerTemplate(profile);
            profileCards += card;
        } else if (profile instanceof Engineer) {
            const card = addEngineerTemplate(profile);
            profileCards += card;
        } else if (profile instanceof Intern) {
            const card = addInternTemplate(profile);
            profileCards += card;
        }
    })


    const newHtml = wrapProfileCards(profileCards);

    writeHtml(newHtml);
};

// Function to write the final HTML document in dist folder
function writeHtml(newHtml) {
    fs.writeFile('./dist/team-profile.html', newHtml, (err) => {
        if (err) throw err;
        console.log('HTML document successfully created in /dist folder.');
    });
};
