const express = require("express");
const app = express();
const fs = require("fs");
let PORT = 8081;

app.use(express.json());

// Rota GET
app.get('/soma', (req, res) => {
    try {
        res.status(200).json({ message: 'Vamos somar :D' });
    } catch (error) {
        res.status(500).json(error);
    }
});

// Rota POST
app.post('/soma', (req, res) => {
    try {
        const { numeros } = req.body;       
        
        if (!Array.isArray(numeros)) {
            return res.status(400).json({ message: "Os numeros devem ser preenchidos corretamente!" });
        }

        const total = numeros.reduce((acc, curr) => acc + Number(curr), 0);
        
        res.status(200).json({ message: `A soma dos números é ${total}` });
    } catch (error) {
        res.status(500).json(error);
    }
});

app.listen(PORT, () => {
    console.log(`O servidor está rodando em http://localhost:${PORT}`);
});