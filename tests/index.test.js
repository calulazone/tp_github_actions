const { sum } = require('../src/functions');

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