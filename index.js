const express = require('express');
const app = express();

app.post('/api/callback', (req, res) => {
    console.log('Dados recebidos:', req.body);
    res.sendStatus(200); // Resposta de sucesso
});

app.listen(3000, () => console.log('Servidor rodando!'));
