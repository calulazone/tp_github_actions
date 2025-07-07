const { sum, isValidEmail, isValidName, saveUserToDatabase } = require('../src/functions');

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('adds -1 + 1 to equal 0', () => {
    expect(sum(-1, 1)).toBe(0);
});

test('adds 0 + 0 to equal 0', () => {
    expect(sum(0, 0)).toBe(0);
});

test('adds 2.5 + 3.5 to equal 6', () => {
    expect(sum(2.5, 3.5)).toBe(6);
});

test('email valide', () => {
    expect(isValidEmail('test@example.com')).toBe(true);
    expect(isValidEmail('test__@example.com')).toBe(true);

});

test ('email invalide', () => {
    expect(isValidEmail('')).toBe(false);
    expect(isValidEmail('test@.com')).toBe(false);
    expect(isValidEmail('test@com')).toBe(false);
    expect(isValidEmail('test@com.')).toBe(false);
});

test('nom valide', () => {
    expect(isValidName('John')).toBe(true);
    expect(isValidName('Jo')).toBe(true);
    expect(isValidName('Gerrard')).toBe(true);
});

test('nom invalide', () => {
    expect(isValidName('')).toBe(false);
    expect(isValidName('J')).toBe(false);
    expect(isValidName('Jo1')).toBe(false);
    expect(isValidName('John Doe')).toBe(false);
});

/*
test('saveUserToDatabase valide', async () => {
const db = require('../src/db/db.js');
  const result = await saveUserToDatabase('John', 'Doe', 'john.doe@example.com');

  expect(result.success).toBe(true);
  expect(result.user).toBeDefined();

  expect(result.user.name).toBe('John');
  expect(result.user.surname).toBe('Doe');
  expect(result.user.email).toBe('john.doe@example.com');
});
*/
