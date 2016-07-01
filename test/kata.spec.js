import {sortArray} from './kata';
import it_multiple from './it_multiple';

describe('kata unit tests', () => {

    const testCases = [
        [[0]],
        [[0, 0]],
        [[1, 2, 3]],
        [[3, 2, 1]]
    ];

    it_multiple(
        'sortArray',
        xs => {
            const expected = xs.slice().sort();
            expect(sortArray(xs)).toEqual(expected);
        },
        testCases);
});
