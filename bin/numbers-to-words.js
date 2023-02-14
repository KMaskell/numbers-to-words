import { Numbers } from './numbers.js';

const checkForException = (num) => {
    if ((num > 100000) | (num < 0)) {
        throw new Error('Input is not within accepted range: 0 --> 100000');
    } else if (typeof num == 'undefined') {
        throw new Error('Input undefined');
    } else if (isNaN(num)) {
        throw new Error('Input is not a number');
    } else {
        return convert_thousands(num);
    }
};

const convert_thousands = (num) => {
    const isRound = num % 1000 == 0 || num > 1099;
    if (num >= 1000) {
        const returnedString = `${convert_hundreds(
            Math.floor(num / 1000)
        )} thousand${!isRound ? ' and' : ','} ${convert_hundreds(num % 1000)}`
            .trim()
            .replace('  ', ' ')
            .replace(/,\s*$/, '');
        return returnedString;
    } else {
        return convert_hundreds(num);
    }
};

const convert_hundreds = (num) => {
    const isRound = num % 100 == 0;
    if (num > 99) {
        const returnedString = `${
            Numbers.ones[Math.floor(num / 100)]
        } hundred ${!isRound ? 'and' : ''} ${convert_tens(num % 100)}`.trim();
        return returnedString;
    } else {
        return convert_tens(num);
    }
};

const convert_tens = (num) => {
    const isRound = num % 10 == 0;
    if (num < 10) return Numbers.ones[num];
    else if (num >= 10 && num < 20) return Numbers.teens[num - 10];
    else {
        const returnedString = `${Numbers.tens[Math.floor(num / 10)]}${
            !isRound ? '-' : ''
        }${Numbers.ones[num % 10]}`.trim();

        return returnedString;
    }
};

const NumbersToWords = (num) => {
    if (num == 0) return 'zero';
    return checkForException(num);
};

export default NumbersToWords;
