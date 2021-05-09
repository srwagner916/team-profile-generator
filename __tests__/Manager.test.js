const Manager = require('../lib/Manager.js');

test('Creates a new Manager object', () => {
  const manager = new Manager('Jeff', 2, 'jeff@email.com', 1);

  expect(manager.name).toEqual(expect.any(String));
  expect(manager.id).toEqual(expect.any(Number));
  expect(manager.email).toEqual(expect.any(String));
  expect(manager.officeNumber).toEqual(expect.any(Number));
  expect(manager.role).toEqual(expect.any(String));
});

test('Returns the value of manager.name', () => {
  const manager = new Manager('Jeff', 2, 'jeff@email.com', 1);

  expect(manager.getName()).toBe('Jeff');
});

test('Return the value of manager.id', () => {
  const manager = new Manager('Jeff', 2, 'jeff@email.com', 1);

  expect(manager.getId()).toBe(2);
});

test('Return the value of manager.email', () => {
  const manager = new Manager('Jeff', 2, 'jeff@email.com', 1);

  expect(manager.getEmail()).toBe('jeff@email.com');
});

test('Return the value of getRole()', () => {
  const manager = new Manager('Jeff', 2, 'jeff@email.com', 1);

  expect(manager.getRole()).toBe('Manager');
})