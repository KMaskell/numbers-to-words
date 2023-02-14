import { Numbers } from './numbers.js';

const checkForException = (num) => {
    process.on('exit', function (code) {
        return console.log(`(exit code: ${code})`);
    });
    if ((num > 100000) | (num < 0)) {
        throw new Error('Input is not within accepted range: 0 --> 100000');
    } else if (typeof num == 'undefined') {
        throw new Error('Input undefined');
    } else if (isNaN(num)) {
        throw new Error('Input is not a number');
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
