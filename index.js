// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js')
const fs = require('fs')

// TODO: Create an array of questions for user input
const questions = [
    //license
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'What is your Github username?',
        name: 'username',
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email',
    },
    {
        type: 'list',
        message: 'What type of license does this application use?',
        name: 'license',
        default: 'MIT',
        choices: ['MIT', '', '', '', ''],
    },
    {
        type: 'input',
        message: 'Provide a description of the application.',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Provide installation instructions for the application.',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Provide usage information for the application.',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Provide contribution guidelines for the application',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'Provide testing instructions for the application',
        name: 'testing',
    },
    ];

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile(`./Example/README.md`, data, (error) => {
        if(error) {
            console.error(error)
        }
    })
};

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((response) => {
            const markdwn = generateMarkdown(response)
            writeToFile(markdwn)
        })
}


// Function call to initialize app
init();
