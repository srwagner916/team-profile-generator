const Employee = require('../lib/Employee.js');

test('Creates a new Employee object', () => {
  const employee = new Employee('Bob', 1, 'bob@email.com');

  expect(employee.name).toEqual(expect.any(String));
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
});

test('returns the value of employee.name', () => {
  const employee = new Employee('Bob', 1, 'bob@email.com');
  
  expect(employee.getName()).toBe('Bob');
});

test('Returns the value of employee.id', () => {
  const employee = new Employee('Bob', 1, 'bob@email.com');

  expect(employee.getId()).toBe(1);
});

test('Returns the value of employee.email', () => {
  const employee = new Employee('Bob', 1, 'bob@email.com');

  expect(employee.getEmail()).toBe('bob@email.com');
});

test('Returns the value "Employee"', () => {
  const employee = new Employee('Bob', 1, 'bob@email.com');

  expect(employee.getRole()).toBe('Employee')
});