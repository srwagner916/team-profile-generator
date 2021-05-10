const teamArr = require('../index.js');
const Engineer = require('../lib/Engineer.js');
const Intern = require('../lib/Intern.js');
const Manager = require('../lib/Manager.js');

//// Generate Manager Card
///
const generateManager = teamArr => {
  for(let i=0; i<teamArr.length; i++) {
    if (teamArr[i].role === 'Manager') {
      const manager = new Manager(teamArr[i].name, teamArr[i].id, teamArr[i].email, teamArr[i].officeNumber);
      console.log(manager);
      return `
      <div class="card shadow">
        <div class="card-header bg-dark">
          <h3 class="text-light">${manager.getName()}</h3><br>
          <h3 class="text-light">${manager.getRole()}</h3>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Employee ID: ${manager.getId()}</li>
          <li class="list-group-item"><a href="mailto:${manager.getEmail()}">Email: ${manager.getEmail()}</a></li>
          <li class="list-group-item">Office Number: ${manager.getOffice()}</li>
        </ul>
      </div>`
    } 
  }
}

//// Generate Engineer Card
///
const generateEngineer = teamArr => {
  for(let i=0; i<teamArr.length; i++) {
    if (teamArr[i].role === 'Engineer') {
      const engineer = new Engineer(teamArr[i].name, teamArr[i].id, teamArr[i].email, teamArr[i].github);
      return `
      <div class="card shadow">
        <div class="card-header bg-dark">
          <h3 class="text-light">${engineer.getName()}</h3><br>
          <h3 class="text-light">${engineer.getRole()}</h3>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Employee ID: ${engineer.getId()}</li>
          <li class="list-group-item"><a href="mailto:${engineer.getEmail()}">Email: ${engineer.getEmail()}</a></li>
          <li class="list-group-item"><a href="http://github.com/${engineer.getGithub()}" target="_blank">GitHub: ${engineer.getGithub()}</a></li>
        </ul>
      </div>`
    } 
  }
}

//// Generate Intern Card
///
const generateIntern = teamArr => {
  for(let i=0; i<teamArr.length; i++) {
    if(teamArr[i].role === 'Intern') {
      const intern = new Intern(teamArr[i].name, teamArr[i].id, teamArr[i].email, teamArr[i].school);
      return `
      <div class="card shadow">
        <div class="card-header bg-dark">
          <h3 class="text-light">${intern.getName()}</h3><br>
          <h3 class="text-light">${intern.getRole()}</h3>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Employee ID: ${intern.getId()}</li>
          <li class="list-group-item"><a href="mailto:${intern.getEmail()}">Email: ${intern.getEmail()}</a></li>
          <li class="list-group-item">School: ${intern.getSchool()}</li>
        </ul>
      </div>`
    } 
  }
}

//// Export page HTML
///
module.exports = teamArr => {
  return `
  <!DOCTYPE html>
  <html lang="en">

  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>My Team</title>
    <link rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/css/bootstrap.min.css"
      integrity="sha512-P5MgMn1jBN01asBgU0z60Qk4QxiXo86+wlFahKrsQf37c9cro517WzVSPPV1tDKzhku2iJ2FVgL67wG03SGnNA=="
      crossorigin="anonymous"/>
  </head>

  <body>
    <div class="jumbotron bg-dark">
      <div class="container">
        <h1 class="text-center text-light">My Team</h1>
      </div>
    </div>
    <div class="container" id="cards-container">
      <div class="row">
        <div class = "col-4">
          ${generateManager(teamArr)}
        </div>
        <div class = "col-4">
          ${generateEngineer(teamArr)}
        </div>
        <div class = "col-4">
          ${generateIntern(teamArr)}
        </div>
      </div>
    </div>
  </body>
  `
}
