import SUBJECTS from '../constants/subjects.js';

function getAll() {
    return SUBJECTS;
}

function getById(id) {
    const subject = SUBJECTS.find(subject => subject.id === id);

    if (subject === undefined) {
        return null;
    }

    return subject;
}

export {
    getAll,
    getById,
};
