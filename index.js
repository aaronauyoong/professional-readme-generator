// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

// TODO: Create an array of questions for user input
// const questions = [];

const generateREADME = (answers) => 
`# ${answers.project}
Project Owner: ${answers.name}

## Table of Contents
* [Description](#Description)
* [License](#License)
* [Installation](#Installation)
* [Usage](#Usage)
* [Contributions](#Contributions)
* [Test](#Test)
* [Questions](#Questions)

## Description
${answers.description}

## License
${answers.license}

## Installation
${answers.installation}

## Usage
${answers.usage}

## Contributions
${answers.contributions}

## Tests
${answers.tests}

## Questions
GitHub Profile: github.com/${answers.github}
Email: ${answers.email}

`;

inquirer
.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
    },
    {
        type: 'input',
        name: 'project',
        message: 'What is the project name/title?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a brief description of your project.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please walk through the installation instructions and setup of your project.',
    },
    {
        type: 'input',
        name: 'usage',
        message: '',
    },
    {
        type: 'input',
        name: 'contributions',
        message: '',
    },
    {
        type: 'input',
        name: 'tests',
        message: '',
    },
    {
        type: 'input',
        name: 'license',
        message: '',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please enter your GitHub username.',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address.',
    },
])


// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();