//Importando o Express
const express = require('express');
//Instanciando o Express
const app = express();

let rodando = false;
let minutos = 0;
let segundos = 0

let setIntervalDisparado = false;

function iniciarCronometro() {
    rodando = true;

    if (!setIntervalDisparado) {
        setInterval(() => {
            if (rodando) {
                if (segundos === 59) {
                    segundos = 0;
                    minutos++
                } else {
                    segundos++
                }
            }
        }, 1000);

        setIntervalDisparado = true;
    }
}

//Rotas
app.get('/', (requisicao, resposta) => {
    return resposta.send(`Tempo atual do cronômetro: ${minutos.toString().padStart(2, "0")} minutos e ${segundos.toString().padStart(2, "0")} segundos`);
});

app.get('/iniciar', (requisicao, resposta) => {
    iniciarCronometro();
    return resposta.send('Cronometro iniciado!');
});

app.get('/pausar', (requisicao, resposta) => {
    rodando = false;
    return resposta.send('Cronometro pausado!');
});

app.get('/continuar', (requisicao, resposta) => {
    rodando = true;
    return resposta.send('Cronometro iniciado!');
});

app.get('/zerar', (requisicao, resposta) => {
    minutos = 0;
    segundos = 0;
    return resposta.send('Cronometro zerado!');
});

//Derecionando para porta 800
app.listen(8000);