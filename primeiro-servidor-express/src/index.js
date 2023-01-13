const express = require('express');
const app = express();

app.get('/', (requisicao, resposta) => {
    resposta.send('Você está na minha rota principal');
});

app.get('/home', (requisicao, resposta) => {
    resposta.send('Olá! Esse é o meu primeiro servidor com o Express');
});

app.get('/array', (requisicao, resposta) => {
    const array = [1, 2, 3, 4, 5]
    resposta.send(array);
});

app.listen(3000);