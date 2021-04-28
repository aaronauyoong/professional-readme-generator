const inquirer = require('inquirer');
const fs = require('fs');
// const generateMarkdown = require('./utils/generateMarkdown');

const generateREADME = (answers) => {

    const licenseBadge = {
    "MIT": "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://choosealicense.com/licenses/mit/)",
    "GNU GPLv3": "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://choosealicense.com/licenses/gpl-3.0/)",
    "Apache License 2.0": "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://choosealicense.com/licenses/apache-2.0/)",
    }

return `# ${answers.project}
Project Owner: ${answers.name}

${licenseBadge[answers.license]}

## Table of Contents
* [Description](#Description)
* [License](#License)
* [Installation](#Installation)
* [Usage](#Usage)
* [Contributions](#Contributions)
* [Tests](#Tests)
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
For any further enquiries, please do not hesitate to contact me via my:
1) GitHub Profile: github.com/${answers.github}
2) Email: ${answers.email}

`;
}

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
            message: 'Please provide instructions and examples for use.',
        },
        {
            type: 'input',
            name: 'contributions',
            message: 'What are the guidelines for making contributions?',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Have you written tests for your application? If so, please provide examples on how to run them here',
        },
        {
            type: 'list',
            name: 'license',
            message: 'What license does your project have?',
            choices: ['MIT', 'GNU GPLv3', 'Apache License 2.0']
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
    .then((answers) => {
        const readMEContent = generateREADME(answers);

        fs.writeFile('newREADME.md', readMEContent, (err) =>
        err ? console.log(err) : console.log('Successfully created your README - newREADME.md!')
        );
    });