import {Router} from 'express';
import * as subjects from '../models/subjects.js';

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

export default router;
