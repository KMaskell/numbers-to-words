import NumbersToWords from './numbers-to-words.js';

describe('Numbers to words', () => {
    describe('Successful', () => {
        it('should return the correct words for a passed number argument between 1 and 19', () => {
            expect(NumbersToWords('0')).toBe('zero');
            expect(NumbersToWords('10')).toBe('ten');
            expect(NumbersToWords('19')).toBe('nineteen');
        });

        it('should return the correct words for a passed number argument between 20 and 99', () => {
            expect(NumbersToWords('20')).toBe('twenty');
            expect(NumbersToWords('55')).toBe('fifty-five');
            expect(NumbersToWords('100')).toBe('one hundred');
        });

        it('should return the correct words for a passed number argument between 101 and 1000', () => {
            expect(NumbersToWords('101')).toBe('one hundred and one');
            expect(NumbersToWords('700')).toBe('seven hundred');
            expect(NumbersToWords('999')).toBe('nine hundred and ninety-nine');
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
