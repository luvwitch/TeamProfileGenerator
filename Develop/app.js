const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const employees = [];

createEmployee = () => {  
  inquirer.prompt([
    {
      type: 'check',
      name: 'role',
      message: 'Which role would you like to create?',
      choices: ['Manager','Engineer', 'Intern'],
    }
  ]).then(response => {
    console.log("New " + response.role + " created!");
    switch (response.role) {
      case 'Manager':
         managerQ();
         break;
      case 'Engineer':
        engineerQ();
        break;
      case 'Intern':
        internQ();
        break;
      default:
        console.log("You must choose a role.");
        return;  
    };
  });
};

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

//  MANAGER QUESTIONS ARRAY

managerQ = () => {
  inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: "Can I have the manager's name?"
    },
    {
        type: 'input',
        name: 'id',
        message: "And the managers ID number?"
    },
    {
        type: 'input',
        name: 'email',
        message: "Next, the manager's email address?"
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: "And finally, the manager's office number?"
    }
  ]).then(response => {

    const manager = new Manager(response.name, response.id, response.email, response.officeNumber);
    employees.push(manager);
    return manager;

  });

  addagain();
};

//  ENGINEER QUESTIONS ARRAY

engineerQ = () => {
  inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: "Can I have the engineer's name?"
    },
    {
        type: 'input',
        name: 'id',
        message: "And the engineer's ID number?"
    },
    {
        type: 'input',
        name: 'email',
        message: "Next, the engineer's email address?"
    },
    {
      type: 'input',
      name: 'github',
      message:"What is the engineer's github username?",
    }
  ]).then(response => {

    const emgineer = new Engineer(response.name, response.id, response.email, response.github);
    employees.push(engineer);
    return engineer;

  });

  addagain();
};

//  INTERN QUESTIONS ARRAY

internQ = () => {
  inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: "What is the intern's name?"
    },
    {
        type: 'input',
        name: 'id',
        message: "And the intern's ID number?"
    },
    {
        type: 'input',
        name: 'email',
        message: "The intern's email address?"
    },
    {
      type: 'input',
      name: 'school',
      message:"What school did the intern graduate from OR is currently attending?",
    }
  ]).then(response => {

    const intern = new Intern(response.name, response.id, response.email, response.school);
    employees.push(intern);
    return intern;

  });
  addagain();
};

// Check if more employees will be hired/added

addAgain = () => { 
  inquirer.prompt([
    {      
      type: 'check',
      name: 'add',
      message: 'Add more team members?',
      choices: ['yes', 'no'],     

    }
  ]).then(response => {
      if (response.add === 'yes') {
        createEmployee();
        }; 
      if (response.add === 'no') {
        createTeam();
        console.log("Looks like a good batch of new hires! Generating your profile now.");
      };
  });      
};

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

createTeam = () => {
  fs.writeFile(outputPath, render(employees), err => {
    err ? console.log(err) : console.log("Go team! Your profile was created!");
  });
};  

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.
