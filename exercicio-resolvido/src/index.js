const express = require('express');
const app = express();

const arrayDeUsuarios = [
    { id: 11, nome: 'joao', idade: 23 },
    { id: 2, nome: 'maria', idade: 18 },
    { id: 4, nome: 'ana', idade: 30 },
    { id: 1, nome: 'rodrigo', idade: 17 },
    { id: 123, nome: 'antonio', idade: 16 },
]

app.get('/usuarios', (requisicao, resposta) => {
    resposta.send(arrayDeUsuarios);
});

app.listen(3000, () => {
    console.log('Servidor inicializado na porta 3000')
});