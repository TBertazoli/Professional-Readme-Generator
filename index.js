// TODO: Include packages needed for this application
const inquirer = require('inquirer');
// const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your Project name? (Required)',
            validate: projectTitle => {
                if (projectTitle) {
                    return true;
                } else {
                    console.log('You need to enter a Project Name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please provide a short description of the project explaining the what, why, and how of your project. (Required)',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('You need to enter a project description!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the steps required to install your project'
            // validate: descriptionInput => {
            //     if (descriptionInput) {
            //         return true;
            //     } else {
            //         console.log('You need to enter a project description!');
            //         return false;
            //     }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions and examples for use. Include screenshots as needed.'
        },
        {
            type: 'input',
            name: 'credits',
            message: 'List your collaborators, if any.'
        },
        {
            type: 'input',
            name: 'licence',
            message: 'Enter the license used for this project. This lets other developers know what they can do and cannot do with your project'
        },
        {
            type: 'input',
            name: 'test',
            message: 'Please provide examples on how to run test for your application'
        },
          {
            type: 'input',
            name: 'contributing',
            message: 'Would you like to contribute with this project'
        }
                  {
            type: 'input',
            name: 'questions',
            message: 'Do you have any questions about this project?'
        }

    ]);

    // TODO: Create a function to write README file
    function writeToFile(fileName, data) { }

    // TODO: Create a function to initialize app
    function init() { }

    // Function call to initialize app
    init();
