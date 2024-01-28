var prompt = require('prompt-sync')();

const filmes = [
    {
    nome: "Pequeno príncipe",
    rottenTomato: 8.6,
    imdb: 9.6,
    assistido: "n"
    }
];


console.log(`
Escolha uma opção

==================================

0 - Sair
1 - Cadastrar filmes
2 - listar filmes
3 - Calcular média
4 - Filtrar por filmes não vistos
`
);

const escolha = prompt(" ")

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
} else if (escolha === 2) {
    console.table(filmes)

} else if ( escolha === 3 ) {
    const nomeFilmeEscolhido =  prompt("Digite o nome do filme desejado: ")

    for ( item of filmes ) {
        if ( item.nome === nomeFilmeEscolhido ) {
            notaRottenTomatos = item.rottenTomato
            notaImdb = item.imdb
            somaNotas = notaRottenTomatos + notaImdb
            mediaNotas = somaNotas / 2

            console.log("A média das notas é " + mediaNotas)

            break
        }
    }
} else if ( escolha === 4 ) {
    for ( item of filmes ){
        if ( item.assistido === n ) {
            console.log(filmesAssistido)
        }
    }
} else {

}