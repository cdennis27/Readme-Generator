
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const { writeFile } = require('fs').promises;

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
        type: 'input',
        name: 'questions',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
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

const init = () => {
    promptUser()

        .then((answers) => writeFile('./destination/README.md', generateMarkdown(answers)))
        .then(() => console.log('Successfully wrote new README.md file!'))
        .catch((err) => console.error(err));

};

init();
