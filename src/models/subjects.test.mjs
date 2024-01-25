import {getAll, getById} from './subjects.js';

const KNOWN_SUBJECT = 'programacao';
const UNKNOWN_SUBJECT = null;

test('Get all subjects should return subjects', () => {
    expect(getAll()).not.toBeNull();
});

test('Get unknown subject should return null', () => {
    expect(getById(UNKNOWN_SUBJECT)).toBeNull();
});

test('Get a known subject should return subject data', () => {
    expect(getById(KNOWN_SUBJECT)).not.toBeNull();
});
