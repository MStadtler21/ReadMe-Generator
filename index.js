// array of questions for user
const questions = [


const inquirer = require("inquirer");

const fs = require("fs");

const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);
  
  function promptUser() {
    return inquirer.prompt([
      {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
      },
      {
        type: "input",
        name: "description",
        message: "Describe this project"
      },
      {
        type: "input",
        name: "table of contents",
        message: "Describe the Table of Contents"
      },
      {
        type: "input",
        name: "installation",
        message: "Provide step by step series of examples and explanations about how to get a development env running."
      },
      {
        type: "input",
        name: "usage",
        message: "Who can use this application?"
      },
      {
        type: "input",
        name: "license",
        message: "A short snippet describing the license (MIT, Apache etc)"
      },
      {
        type: "input",
        name: "contributing",
        message: "Who contributed to this project?"
      },
      {
        type: "input",
        name: "tests",
        message: "Describe and show how to run the tests with code examples."
      },
      {
        type: "input",
        name: "questions",
        message: "Any questions about this project?"
      }
    ]);
  }
];

function generateReadMe (answers) {
  return `
  Title: ${answers.title} 
  Description: ${answers.description}
  Instructions: ${answers.instructions}
  Usage: ${answers.usage}
  Contribution guidelines: ${answers.contribution}
  Testing guidelines ${answers.testing}
  `
}

promptUser()
  .then(function(answers) {
    const README = generateReadMe(answers);

    return writeFileAsync("README.md", README);
  })
  .then(function() {
    console.log("Successfully wrote to README.md");
  })
  .catch(function(err) {
    console.log(err);
  });
  // function to write README file
  function writeToFile(fileName, data) {
    
  }

// function to initialize program
function init() {

}

// function call to initialize program
init();
