const inquirer = require('inquirer');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');

let teamArr = [];

const managerQuestions = [
  // Manager Questions
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
  }
];

const managerPrompt = () => {
  return inquirer.prompt(managerQuestions)
    .then(answers => {
      manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
      console.log(manager);
      teamArr.push(manager);
  });
}

const anotherMember = () => {
  return inquirer.prompt([
    {
      type: 'list',
      name: 'addAnotherTeamMember',
      message: 'Would you like to add an engineer, intern, or finish?',
      choices: ['Engineer', 'Intern', 'Finish']
    }
  ])
  .then(answers => {
    switch (answers.addAnotherTeamMember) {
      case 'Engineer':
        engineerPrompt().then(anotherMember);
        break;
      case 'Intern':
        internPrompt().then(anotherMember);
        break;
      case 'Finish':
        break;
    }
  })
};

const engineerPrompt = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'engineerName',
      message: "What is your engineer's name?",
    },
    {
      type: 'input',
      name: 'engineerId',
      message: "What is your engineer's employee ID?",
    },
    {
      type: 'input',
      name: 'engineerEmail',
      message: "What is your engineer's email?",
    },
    {
      type: 'input',
      name: 'engineeerGithub',
      message: "What is your engineer's GitHub username",
    }
  ])
    .then(answers => {
      engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineeerGithub);
      teamArr.push(engineer);
   });
};
            
const internPrompt = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'internName',
      message: "What is your intern's Name?"
    },
    {
      type: 'input',
      name: 'internId',
      message: "What is your intern's ID?"
    },
    {
      type: 'input',
      name: 'internEmail',
      message: "What is your intern's email?"
    },
    {
      type: 'input',
      name: 'internSchool',
      message: "What is the name of your intern's school?"
    }
  ])
    .then(answers => {
      intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
      teamArr.push(intern);
    });
};

  managerPrompt()
    .then(anotherMember)
  