const { json } = require("body-parser");
const express = require("express")
const app = express()
const fs = require("fs"); 
let PORT = 8081


app.use(express.json());

app.get('/alunos/notas', (req, res) => {
    try {
        res.status(201).json({ message: 'servidor inicializado' });
    } catch (error) {
        res.status(500).json(error);
    }
})

app.post('/alunos/notas', (req, res) => {
    try {

        

    } catch (error) {
        res.status(500).json(error);
    }
})



app.listen(PORT, () => {
    console.log(`O servidor esta rodando em http://localhost:${PORT}`)
})