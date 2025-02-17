// API -> Application Programming Interface
// sistema utilizado para comunicação de duas ou mais entidades

import express from "express";
import cors from "cors";
import { db } from "./connect.js";
// biome-ignore lint/style/useNodejsImportProtocol: <explanation>
import path from "path";

const __dirname = path.resolve()

// trazendo todo o "poder" que o express tem
// armazenando dentro da variável app
// e assim iremos gerenciar toda a nossa api
const app = express();
const PORT = 3001;

app.use(cors())

app.get("/api/", (req, res) => {
    res.send("Trabalhando com os endpoints '/artists' e '/songs'")
})

app.get("/api/artists", async (req, res) => {
    res.send(await db.collection("artists").find({}).toArray())
})

app.get("/api/songs", async (req, res) => {
    res.send(await db.collection("songs").find({}).toArray())
})

app.use(express.static(path.join(__dirname, '../front-end/dist')))

app.get("*", async (req, res) => {
    res.sendFile(path.join(__dirname, '../front-end/dist/index.html'),)
})

app.listen(PORT, () => {
    console.log(`Servidor está escutando a porta ${PORT}`)
});
