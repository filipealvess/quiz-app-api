import {Router} from 'express';
import * as subjects from '../models/subjects.js';

const router = Router();

router.get('/', (req, res) => {
    res.json(subjects.getAll());
});

export default router;
