const inquirer = require('inquirer');
const Manager = require('./lib/Manager.js');

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

const anotherMember = () => inquirer.prompt([
    {
      type: 'list',
      name: 'addAnotherTeamMember',
      message: 'Would you like to add an engineer, intern, or finish?',
      choices: ['Engineer', 'Intern', 'Finish']
    }
  ]);

  

  
  // Engineer Questions
  //   {
    //     type: 'input',
    //     name: 'engineerName',
    //     message: "What is your engineer's name?",
    //     when: (answers) => answers.addAnotherTeamMember === 'Engineer'
    //   },
    //   {
      //     type: 'input',
      //     name: 'engineerId',
      //     message: "What is your engineer's employee ID?",
      //     when: (answers) => answers.addAnotherTeamMember === 'Engineer'
      //   },
      //   {
        //     type: 'input',
        //     name: 'engineerEmail',
        //     message: "What is your engineer's email?",
        //     when: (answers) => answers.addAnotherTeamMember === 'Engineer'
        //   },
        //   {
          //     type: 'input',
          //     name: 'engineeerGithub',
          //     message: "What is your engineer's GitHub username",
          //     when: (answers) => answers.addAnotherTeamMember === 'Engineer'
          //   },
          //   {
            //     type: 
            //   }
            // ];
            
const managerPrompt = () => {
  return inquirer.prompt(managerQuestions)
    .then(answers => {
      manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
      console.log(manager);
      teamArr.push(manager);
    });
}


  managerPrompt()
    .then(anotherMember);
  