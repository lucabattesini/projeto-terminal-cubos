var prompt = require('prompt-sync')();

const filmes = [
    {
    nome: "Pequeno príncipe",
    nota: {
        rottenTomatos: 8.6,
        imdb: 9.6,
    },
     assistido: true
    }
];

const escolha = prompt(`
Escolha uma opção

==================================

0 - Sair
1 - Cadastrar filmes
2 - listar filmes
3 - Calcular média
4 - Filtrar por filmes não vistos
`
);

if ( escolha === 1 ) {
    const nome = prompt("Digite o nome do filme: ");
    const rottenTomato = Number(prompt("Digite o nome do filme: "));
    const imdb= Number(prompt("Digite o nome do filme: "));
    const assistido = prompt("Digite o nome do filme: ");
}