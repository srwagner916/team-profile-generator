const Engineer = require('../lib/Engineer.js');

test('Creates an Engineer object', () => {
  const engineer = new Engineer('Doug', 3, 'doug@email.com', 'doughub');
  
  expect(engineer.name).toEqual(expect.any(String));
  expect(engineer.id).toEqual(expect.any(Number));
  expect(engineer.email).toEqual(expect.any(String));
  expect(engineer.github).toEqual(expect.any(String));
//   expect(engineer.role).toEqual(expect.any(String));
});

test('Returns value of engineer.name', () => {
  const engineer = new Engineer('Doug', 3, 'doug@email.com', 'doughub');

  expect(engineer.getName()).toBe('Doug');
});

test('Returns value of engineer.id', () => {
  const engineer = new Engineer('Doug', 3, 'doug@email.com', 'doughub');

  expect(engineer.getId()).toBe(3);
});

test('Returns value of engineer.email', () => {
  const engineer = new Engineer('Doug', 3, 'doug@email.com', 'doughub');

  expect(engineer.getEmail()).toBe('doug@email.com');
});

test('Returns value of engineer.github', () => {
  const engineer = new Engineer('Doug', 3, 'doug@email.com', 'doughub');

  expect(engineer.getGithub()).toBe('doughub');
});

test('Returns value of engineer.role', () => {
  const engineer = new Engineer('Doug', 3, 'doug@email.com', 'doughub');

  expect(engineer.getRole()).toBe('Engineer');
});