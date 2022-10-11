// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const generateReadme = require('./src/readme-template');

// TODO: Create an array of questions for user input
const prompQuestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'projectTitle',
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
            message: 'Please provide a short description of your project. (Required)',
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
            message: 'What are the steps required to install your project',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions and examples for use, if any.'
        },
        {
            type: 'input',
            name: 'credits',
            message: 'List your collaborators, if any.'
        },
        {
            type: 'list',
            name: 'license',
            message: ' Choose the license used for this project. This lets other developers know what they can do and cannot do with your project',
            choices: ['MIT', 'Apache', 'BSD-3', 'BSD-2', 'ISC', 'None'],
        },
        {
            type: 'input',
            name: 'test',
            message: 'Please provide a description on how to run test for your application'
        },
        {
            type: 'input',
            name: 'contibution',
            message: 'How you would like other users to contribute to your project?',
        },
        {
            type: 'input',
            name: 'gitHub',
            message: 'What is your GitHub Username (Required)',
            validate: userName => {
                if (userName) {
                    return true;
                } else {
                    console.log('You need to enter a Username!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'link',
            message: 'Enter your GitHub repository link. (Required)',
            validate: linkInput => {
                if (linkInput) {
                    return true;
                } else {
                    console.log('You need to enter your GitHub link!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'linkDeployed',
            message: 'Enter the link to your deployed application.',
           
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email. (Required)',
            validate: emailinput => {
                if (emailinput) {
                    return true;
                } else {
                    console.log('You need to enter your email!');
                    return false;
                }
            }
        },
    ])
        .then(results => {
            return results;
        })
}


// TODO: Create a function to write README file
const writeToFile = (readme, results) => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/README.md', readme, results, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'README created!'
            });
        });
    });
}

// TODO: Create a function to initialize app
function init() {
    prompQuestions()
        .then(results => {
            return generateMarkdown(results);
        })
        .then(results => {
            return generateReadme(results);
        })
        .then(readme => {
            return writeToFile(readme);
        })
}

// Function call to initialize app
init()

