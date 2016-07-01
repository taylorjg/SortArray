import {sortArray} from './kata';
import it_multiple from './it_multiple';

describe('kata unit tests', () => {

    const testCases = [
        [[0]], 
        [[0, 0]], 
        [[1, 2, 3]], 
    ];

    it_multiple(
        'sortArray',
        xs => {
            const expected = xs.sort();
            expect(sortArray(xs)).toBe(expected);
        },
        testCases);
});
