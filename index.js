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
            name: 'projectName',
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
            type: 'confirm',
            name: 'confirmContribution',
            message: 'Would you like to contribute with this project?',
            default: false
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'What you would like to contribute?',
            when: ({ confirmContribution }) => confirmContribution
        },
        {
            type: 'confirm',
            name: 'confirmQuestions',
            message: 'Do you have any questions about this project?',
            default: false
        },
        {
            type: 'input',
            name: 'Questions',
            message: 'What is your question?',
            when: ({ confirmQuestion }) => confirmQuestion
        }
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
            return generateReadme(results);
            console.log(generateReadme(results));
        })
        .then(readme => {
            return writeToFile(readme);
        })

}

// Function call to initialize app
init()

