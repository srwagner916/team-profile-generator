const Intern = require('../lib/Intern.js');

test('Creates a new Intern object', () => {
  const intern = new Intern('Stan', 4, 'stan@email.com', 'University of School');

  expect(intern.name).toEqual(expect.any(String));
  expect(intern.id).toEqual(expect.any(Number));
  expect(intern.email).toEqual(expect.any(String));
  expect(intern.school).toEqual(expect.any(String));
  expect(intern.role).toEqual(expect.any(String));
});

test('Returns the value of intern.name', () => {
  const intern = new Intern('Stan', 4, 'stan@email.com', 'University of School');

  expect(intern.getName()).toBe('Stan');
});

test('Returns the value of intern.id', () => {
  const intern = new Intern('Stan', 4, 'stan@email.com', 'University of School');

  expect(intern.getId()).toBe(4);
});

test('Returns the value of intern.email', () => {
  const intern = new Intern('Stan', 4, 'stan@email.com', 'University of School');

  expect(intern.getEmail()).toBe('stan@email.com');
});

test('Returns the value of intern.school', () => {
  const intern = new Intern('Stan', 4, 'stan@email.com', 'University of School');

  expect(intern.getSchool()).toBe('University of School');
});

test('Returns the value of intern.role', () => {
  const intern = new Intern('Stan', 4, 'stan@email.com', 'University of School');

  expect(intern.getRole()).toBe('Intern');
});