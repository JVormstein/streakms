import express from 'express';
import ejs from 'ejs';

const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.send("Hello World");

});

app.listen(80, () => {
});