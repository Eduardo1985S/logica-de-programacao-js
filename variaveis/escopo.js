// Escopo de variáveis
let global = "Eu sou global";

function testarEscopo() {
    let local = "Eu sou local";
    console.log(global); // Acessível
    console.log(local); // Acessível
}

testarEscopo();
// console.log(local); // Erro: local não definido