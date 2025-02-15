// API -> Application Programming Interface
// sistema utilizado para comunicação de duas ou mais entidades

import express from 'express';
import { db } from './connect.js';

// trazendo todo o 'poder' que o express tem
// armazenando dentro da variável app
// e assim iremos gerenciar toda a nossa api
const app = express();
const PORT = 3001;

app.get('/', (req, res) => {
    res.send('Home...')
})

app.get('/artists', async (req, res) => {
    res.send(await db.collection("artists").find({}).toArray())
})

app.get('/songs', async (req, res) => {
    res.send(await db.collection("songs").find({}).toArray())
})

app.listen(PORT, () => {
    console.log(`Servidor está escutando a porta ${PORT}`)
});
