
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
        message: "Provide infromation on getting the app to work."
      },
      {
        type: "input",
        name: "usage",
        message: "Who can use this application?"
      },
      {
        type: "input",
        name: "license",
        message: "What is your license?"
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
        name: "github",
        message: "Enter you GitHub info:"
      },
      {
        type: "input",
        name: "email",
        message: "Enter your email info:"
      }
    ]);
  }
  
function retrieveShield (answers) {
    return `![npm](https://img.shields.io/static/v1?label=npm&message=${answers}&color=green)
    `
}
  
function generateReadMe (answers) {
  return `${retrieveShield(answers.license)}
  Title: ${answers.title} \n
  Description: ${answers.description} \n
  Table of Contents:
  1. [Description](#description)
  2. [Installation](#installation)
  3. [Usage](#usage)
  4. [Contribution](#contributing)
  5. [Testing](#tests)
  6. [GitHub](#github)
  7. [Email](#email) \n
  Installation: ${answers.installation} \n
  Usage: ${answers.usage} \n
  Licensing: ${answers.license} \n
  Contributions: ${answers.contributing} \n
  Testing: ${answers.tests} \n
  GitHub:${answers.github}\n
  Email:${answers.email}\n
  `
}

promptUser()
  .then(function(answers) {
    const README = generateReadMe(answers);

    return writeFileAsync("newReadMe.md", README);
  })
  .then(function() {
    console.log("Your ReadMe is finished!");
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