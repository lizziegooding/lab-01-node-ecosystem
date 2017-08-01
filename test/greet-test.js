'use strict';

const expect = require('expect');
const greet = require('../lib/greet.js');

describe('test greet', () => {
  it('should return "Hello, world!"', () => {
    let result = greet('world!');
    expect(result).toBe('Hello, world!');
  });
  it('should return null', () => {
    let result = greet(true);
    expect(greet(true)).toBe(null);
    expect(greet({})).toBe(null);
    expect(greet([])).toBe(null);
    expect(greet(17)).toBe(null);
  });
});
