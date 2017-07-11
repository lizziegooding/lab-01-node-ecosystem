'use strict';

const greet = module.exports = {};

greet.hello = (name) => {
    if (typeof name === 'string') {
        return `Hello, ${name}`;
    }
    return null;
};
