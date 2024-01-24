
var prompt = require('prompt-sync')();

console.log(filmes)

const escolha = Number(prompt(`
Escolha uma opção

==================================

0 - Sair
1 - Cadastrar filmes
2 - listar filmes
3 - Calcular média
4 - Filtrar por filmes não vistos
`
));

if ( escolha === 0 )  {
    console.log("Aplicação fechada")

} else if ( escolha === 1 ) {

    const nomeNovoFilme = prompt("Digite o nome do filme: ");
    const rottenTomatoNovoFilme = Number(prompt("Digite a nota do filme no Rotten Tomato: "));
    const imdbNovoFilme = Number(prompt("Digite a nota do filme no Imdb: "));
    const assistidoNovoFilme = prompt("Você já assistiu este filme?: ");

    const novoFilme = {
        nome: nomeNovoFilme,
        nota: {
            rottenTomato: rottenTomatoNovoFilme,
            imdb: imdbNovoFilme
        },
        assistido: assistidoNovoFilme
    }

    filmes.push(novoFilme)
}