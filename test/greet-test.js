'use strict';

const expect = require('expect');
const greet = require('../lib/greet.js');

describe('test greet', () => {

    describe ('test hello', () => {
        it('should return "Hello, world!"', () => {
            let result = greet.hello('world!');
            expect(result).toEqual('Hello, world!');
        });
        it('should return null', () => {
            let result = greet.hello(true);
            expect(result).toEqual(null);
        });
    });
});
