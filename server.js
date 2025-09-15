const { json } = require("body-parser");
const express = require("express")
const app = express()
const fs = require("fs"); 
let PORT = 8081


app.use(express.json());

app.get('/usuarios/novo', (req, res) => {
    try {
        res.status(201).json({ message: 'Oi! faça o login' });
    } catch (error) {
        res.status(500).json(error);
    }
})

app.post('/usuarios/novo', (req, res) => {
    try {
        const { nome, email, senha } = req.body;
        if (nome.length < 3 || senha.length < 4 || !email.includes("@")){
            res.status(401).json({message: `Resposta incorreta`})
        }
        else{
            res.status(200).json({message: "usuario criado"})
        }
        
        let arrayUsers = []

        arrayUsers.push ({nome, email, senha })

        fs.writeFileSync('usuarios.json', JSON.stringify(arrayUsers, null, 2));

    } catch (error) {
        res.status(500).json(error);
    }
})



app.listen(PORT, () => {
    console.log(`O servidor esta rodando em http://localhost:${PORT}`)
})