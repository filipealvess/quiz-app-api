
import 'dotenv/config';
import express from 'express';

const PORT = process.env.PORT || 3000;

const app = express();

app.get('/', (req, res) => {
    res.send('Quiz App');
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
