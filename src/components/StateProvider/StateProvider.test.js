import { nextStage } from './StateProvider';

describe('StateProvider', () => {
    test('should return next stage', () => {
        expect(nextStage(undefined, 'next')).toBe('interviewing');
        expect(nextStage(undefined, 'prev')).toBe('applied');
        expect(nextStage('applied', 'next')).toBe('interviewing');
        expect(nextStage('applied', 'prev')).toBe('applied');
        expect(nextStage('interviewing', 'next')).toBe('hired');
        expect(nextStage('interviewing', 'prev')).toBe('applied');
        expect(nextStage('hired', 'next')).toBe('hired');
        expect(nextStage('hired', 'prev')).toBe('interviewing');
    });
});
