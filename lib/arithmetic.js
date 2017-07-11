'use strict';

const arithmetic = module.exports = {};

arithmetic.add = (a, b) => {
    if (typeof a === 'number' && typeof b === 'number'){
        return a + b;
    }
    return null;
};

arithmetic.sub = (a, b) => {
    if (typeof a === 'number' && typeof b === 'number'){
        return a - b;
    }
    return null;
};
