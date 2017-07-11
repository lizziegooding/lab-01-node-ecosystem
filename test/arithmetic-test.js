'use strict';

// assertion library
const expect = require('expect');
const arithmetic = require('../lib/arithmetic.js');

describe('testing arithmetic', () => {

  describe('testing add', () => {
    it('should return 5', () => {
      let result = arithmetic.add(2, 3);
      expect(result).toEqual(5);
    });
    it('should return null', () => {
      let result = arithmetic.add('bear', 'cub');
      expect(result).toEqual(null);
    });
  });

  describe('testing sub', () => {
    it('should return -1', () => {
      let result = arithmetic.sub(2,3)
      expect(result).toEqual(-1);
    });
    it('should return null', () => {
      let result = arithmetic.sub(true, 45)
      expect(result).toEqual(null);
    });
  });
});
