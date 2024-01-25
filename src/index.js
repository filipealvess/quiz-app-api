
import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import subjects from './routes/subjects.js';

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());

app.use('/subjects', subjects);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});

export default app;
