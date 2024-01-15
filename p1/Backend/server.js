import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res)=>{
    res.send('server is ready');
});

//get a list of four jokes
app.get('/api/jokes', (req, res)=>{
    const jokes = [
        {
            id: 1,
            title: 'A Joke',
            content: 'This is a Joke',
        },
        {
            id: 2,
            title: 'A Joke',
            content: 'This is a second Joke',
        },
        {
            id: 3,
            title: 'A Joke',
            content: 'This is a third Joke',
        },
        {
            id: 4,
            title: 'A Joke',
            content: 'This is a fourth Joke',
        },
    ]
    res.send(jokes);
});

app.listen(port, ()=>{
    console.log(`serve at https://localhost:${port}`);
});
