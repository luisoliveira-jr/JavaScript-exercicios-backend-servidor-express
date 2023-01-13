const express = require('express');
const app = express();

const jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"];
let daVez = 0;

app.get('/', (requisicao, resposta) => {
    const nomeJogador = jogadores[daVez];
    daVez++;

    if (daVez >= jogadores.length) {
        daVez = 0;
    }

    return resposta.send(`É a vez de ${nomeJogador} jogar!`);
});

app.listen(3000);