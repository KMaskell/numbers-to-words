#!/usr/bin/env node

import NumbersToWords from './numbers-to-words.js';

const input = process.argv[2];

try {
    console.log(NumbersToWords(input));
} catch (error) {
    console.error(error);
}
