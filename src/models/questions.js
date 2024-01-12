import QUESTIONS from '../constants/questions.js';

function getBySubject(subject) {
    const questions = QUESTIONS[subject];

    if (questions === undefined) {
        return null;
    }

    return questions;
}

export {
    getBySubject,
};
