function promptUser() {
    return inquirer.prompt([
      {
        type: "input",
        name: "Title",
        message: "What is the title of the project?"
      },
      {
        type: "input",
        name: "Description",
        message: "What is the description of this project?"
      },
      {
        type: "input",
        name: "Table of Contents",
        message: "List out the Table of Contents"
      },
      {
        type: "input",
        name: "Installation",
        message: "How is this project installed?"
      },
      {
        type: "input",
        name: "Usage",
        message: "Enter your GitHub Username"
      },
      {
        type: "input",
        name: "License",
        message: "Enter your LinkedIn URL."
      },
      {
        type:"input",
        name:"Contributing",
        message:"Who, if anyone, contributed to this project?"
      },
      {
        type:"input",
        name:"Tests",
        message:""
      },
      {
        type:"input",
        name:"Questions",
        message:"Where there any questions about this project?"
      }
    ]);
  }