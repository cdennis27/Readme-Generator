// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const { writeFile } = require('fs').promises;

// TODO: Create an array of questions for user input

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description of your project?',
    },
    {
        type: 'input',
        name: 'tableOfContents',
        message: 'What is the table of contents of your project?',
    },
    {
        type: 'input',
        name: 'linkRepo',
        message: 'What is the link for your project repository?',
    },
    {
        type: 'input',
        name: 'linkApp',
        message: 'What is the link for your application?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What is the installation process of your project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the usage of your project?',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'How to contribute to your project? If you leave blank the Contributor Convenant 2.1 will be used as intructions.',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What is the tests for your project?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What is the license of your project?',
        choices: ['MIT', 'Apache-2.0', 'The Unlicense', 'GNU GPLv3'],
    },
];

const promptUser = () => {
    return inquirer.prompt(questions);

};
var thanswers;

// TODO: Create a function to write README file
//function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
const init = () => {
    promptUser()

        .then((answers) => writeFile('./destination/README.md', generateMarkdown(answers)))
        .then(() => console.log('Successfully wrote new README.md file!'))
        .catch((err) => console.error(err));

};
// Function call to initialize app
init();
