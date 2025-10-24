
const { add, subtract, multiply, divide, modulus } = require('./calculator');

test('adds 2 + 3 = 5', () => {
  expect(add(2, 3)).toBe(5);
});

test('subtracts 5 - 2 = 3', () => {
  expect(subtract(5, 2)).toBe(3);
});

test('multiplies 4 * 3 = 12', () => {
  expect(multiply(4, 3)).toBe(12);
});

test('divides 10 / 2 = 5', () => {
  expect(divide(10, 2)).toBe(5);
});

test('throws error for divide by zero', () => {
  expect(() => divide(10, 0)).toThrow("Cannot divide by zero");
});

test('modulus of 10 % 3 should be 1', () => {
    expect(calculator.modulus(10, 3)).toBe(1);
});
