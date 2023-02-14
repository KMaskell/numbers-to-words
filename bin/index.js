#!/usr/bin/env node

import chalk from 'chalk';
import NumbersToWords from './numbers-to-words.js';

const input = process.argv[2];

try {
    console.log(NumbersToWords(input));
} catch (error) {
    console.error(chalk.bold.red(error));
}
