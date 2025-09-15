const express = require("express");
const app = express();
const fs = require("fs");
let PORT = 8081;

app.use(express.json());

// Rota GET
app.get('/alunos/notas', (req, res) => {
    try {
        res.status(200).json({ message: 'Servidor inicializado' });
    } catch (error) {
        res.status(500).json(error);
    }
});

app.post('/alunos/notas', (req, res) => {
    try {
        const { nome, nota } = req.body;

        
        if (typeof nome !== "string" || isNaN(nota)) {
            return res.status(400).json({ message: "Formulário incorreto" });
        }

        const notas = [nota];


        const media = notas.reduce((acc, curr) => acc + curr, 0) / notas.length;

        res.status(201).json({
            message: "Nota registrada com sucesso",
            "aluno": nome,
            "nota": nota,
            "media": media
        });

    } catch (error) {
        res.status(500).json(error);
    }
});

app.listen(PORT, () => {
    console.log(`O servidor está rodando em http://localhost:${PORT}`);
});
