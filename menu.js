import filmes from './db';
import { cadastrarFilme } from './functions';

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
    cadastrarFilme(filmes)
}