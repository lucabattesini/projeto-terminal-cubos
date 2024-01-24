export function cadastrarFilme(filmes) {
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