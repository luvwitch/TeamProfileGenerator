const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const questionsArr = 
[  
  {
    type: 'check',
    name: 'role',
    message: 'Which role would you like to hire for?',
    choices: ['Manager','Engineer', 'Intern'],
  },
  {
    type: 'input',
    message: 'Name of new hire?',
    name: 'name',
  },
  {
    type: 'input',
    message: 'Id of new hire?',
    name: 'id',
  },
  {
    type: 'input',
    message: 'Email of new hire?',
    name: 'email',
  } 
];

const addMore =
[{
  type: 'check',
  name: 'addmore',
  message: 'Add more team members?',
  choices: ['yes', 'no'],        
}];

const employeesArr = "";

createArr() = () => {  
  inquirer  
    .prompt(questionsArr);
    .then((data) =>
      console.log("New " + choice.role + " hired!"),
      addArr(),
    );
};


addArr() = () => { 
  inquirer
    .prompt(addMore);
    .then((data) =>
      if (choice.addmore === 'yes') {
        createArr()
        }; 
      if (choice.addmore === 'no') {
        render(employeesArr)
        fs.writeFile('/output/team.html');
      };
    );      
};


createArr();


// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
