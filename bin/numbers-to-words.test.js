import NumbersToWords from './numbers-to-words.js';

describe('Numbers to words', () => {
    describe('Successful', () => {
        it('should return the correct words for a passed number argument between 1 and 19', () => {
            expect(NumbersToWords('0')).toBe('zero');
        });
    });
});
