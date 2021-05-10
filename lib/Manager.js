const Employee = require('../lib/Employee.js');

class Manager extends Employee {
  constructor (name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
    this.role = this.getRole();
}

  getOffice() {
    return this.officeNumber;
  }

  getRole() {
    return 'Manager';
  }
}

module.exports = Manager;