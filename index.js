// array of questions for user
const questions = [
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

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
