'use strict';

// assertion library
const expect = require('expect');
const arithmetic = require('../lib/arithmetic.js');

describe('test arithmetic', () => {

  describe('test add', () => {
    it('should return 5', () => {
      expect(arithmetic.add(2, 3)).toBe(5);
    });
    it('should return null', () => {
      expect(arithmetic.add('bear', 'cub')).toBe(null);
    });
  });

  describe('test sub', () => {
    it('should return -1', () => {
      expect(arithmetic.sub(2,3)).toBe(-1);
    });
    it('should return null', () => {
      expect(arithmetic.sub(true, 45)).toBe(null);
    });
  });
});
