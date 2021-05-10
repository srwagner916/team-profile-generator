//// Dependencies
///
const inquirer = require('inquirer');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const template = require('./src/template.js');
const fs = require('fs');

// array to store team data
let teamArr = [];

//// Questions
///
// Manager Questions
const managerQuestions = [
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

// Engineer Questions
const engineerQuestions = [
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
];

// Intern Questions
const internQuestions = [
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
];

//// Prompts
///
// prompt for manager
const managerPrompt = () => {
  return inquirer.prompt(managerQuestions)
    .then(answers => {
      manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
      teamArr.push(manager);
      return teamArr;
  });
};

// Prompt for adding another member.  Will redirect back to menu
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
        let data = template(teamArr);
        write(data);
        break;
    }
  })
};

// Prompt for engineer
const engineerPrompt = () => {
  return inquirer.prompt(engineerQuestions)
    .then(answers => {
      engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineeerGithub);
      teamArr.push(engineer);
      return teamArr;
   });
};

// Prompt for intern
const internPrompt = () => {
  return inquirer.prompt(internQuestions)
    .then(answers => {
      intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
      teamArr.push(intern);
      return teamArr;
    });
};

const write = content => {
  fs.writeFile('./dist/index.html', content, (err) => {
    if (err) throw err;
    console.log('file written')
  })
}

//// Call to managerPrompt to initialize the app
///
//
  managerPrompt()
    .then(anotherMember)
    
