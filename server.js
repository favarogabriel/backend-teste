import express from "express";

const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('Servidor online!');
})

app.get('/hi', (req, res) => {
    res.status(200).send('Hello, world!');
})