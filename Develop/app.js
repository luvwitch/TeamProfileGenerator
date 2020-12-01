const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const employeeArr = [];

createEmployee = () => {  
  inquirer.prompt([
    {
      type: 'check',
      name: 'role',
      message: 'Which role would you like to hire for?',
     choices: ['Manager','Engineer', 'Intern'],
    }
  ]).then(response => {
    console.log("New " + response.role + " hired!"),
    switch (response.role){
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


managerQ = () => {

};

engineerQ = () => {

};

internQ = () => {

};

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
        console.log("Looks like a good batch of new hires!");
      };
  });      
};

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

createTeam = () => {

};

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

