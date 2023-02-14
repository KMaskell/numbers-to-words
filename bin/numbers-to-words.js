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
    }
};

const NumbersToWords = (num) => {
    if (num == 0) return 'zero';
    return checkForException(num);
};

export default NumbersToWords;
