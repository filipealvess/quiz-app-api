import {Router} from 'express';
import * as subjects from '../models/subjects.js';
import * as questions from '../models/questions.js';

const router = Router();

router.get('/', (req, res) => {
    res.json(subjects.getAll());
});

router.get('/:id', (req, res) => {
    const subject = subjects.getById(req.params.id);

    if (subject === null) {
        return res.sendStatus(404);
    }

    res.json(subject);
});

router.get('/:id/questions', (req, res) => {
    const subject = subjects.getById(req.params.id);

    if (subject === null) {
        return res.sendStatus(404);
    }

    const questionsList = questions.getBySubject(req.params.id);

    if (questionsList === null) {
        return res.sendStatus(404);
    }

    res.json({
        ...subject,
        questions: questionsList,
    });
});

export default router;
