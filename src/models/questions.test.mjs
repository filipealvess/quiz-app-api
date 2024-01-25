import {getBySubject} from './questions.js';

const KNOWN_SUBJECT = 'programacao';
const UNKNOWN_SUBJECT = null;

test('Get questions for an unknown subject should return null', () => {
    expect(getBySubject(UNKNOWN_SUBJECT)).toBeNull();
});

test('Get questions for a known subject should return not null values', () => {
    expect(getBySubject(KNOWN_SUBJECT)).not.toBeNull();
});
