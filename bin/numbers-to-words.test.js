import NumbersToWords from './numbers-to-words.js';

describe('Numbers to words', () => {
    describe('Successful', () => {
        it('should return the correct words for a passed number argument between 1 and 19', () => {
            expect(NumbersToWords('0')).toBe('zero');
        });
    });

    describe('Exceptions', () => {
        it('should throw an exception if no argument passed', () => {
            expect(() => NumbersToWords()).toThrowError('Input undefined');
        });

        it('should throw an exception if invalid argument passed', () => {
            expect(() => NumbersToWords('@klsngjns76')).toThrowError(
                'Input is not a number'
            );
        });

        it('should throw an exception if argument passed is out of range', () => {
            expect(() => NumbersToWords('-100')).toThrowError(
                'Input is not within accepted range: 0 --> 100000'
            );
            expect(() => NumbersToWords('100001')).toThrowError(
                'Input is not within accepted range: 0 --> 100000'
            );
        });
    });
});
