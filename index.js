const inquirer = require('inquirer');

const Managerquestions = [
  {
    type: 'input',
    name: 'managerName',
    message: "What is your team manager's name?"
  },
  {
    type: 'input',
    name: 'managerId',
    message: "What is your team manager's employee ID?"
  },
  {
    type: 'input',
    name: 'managerEmail',
    message: "What is your team manager's email address"
  },
  {
    type: 'input',
    name: 'managerOfficeNumber',
    message: "What is your team manager's office number?"
  },
  {
    type: 'list',
    name: 'addAnotherTeamMember',
    message: 'Would you like to add an engineer, intern, or finish?',
    choices: ['Engineer', 'Intern', 'Finish']
  }
];

const Engineerquestions