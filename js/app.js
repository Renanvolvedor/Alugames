// let jogosAlugados = 0;

// document.addEventListener('DOMContentLoaded', function() {
// let jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
// });

let jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
// Variável que pega todos os elementos com a classe de alugado do documento e retorna a quantidade.

function exibirJogosAlugados() {
    console.log(`Total de jogos alugados: ${jogosAlugados}`);
}
// Função que exibe o número de jogos alugados no console.

function alterarStatus(id) {
// Função chamada quando o botão pra alugar ou devolver o jogo é clicado.

    let lista = document.getElementById(`game-${id}`);
    // Variável que pega a lista que contem o botão, a imagem e o nome do jogo.
    let botao = lista.querySelector('.dashboard__item__button');
    let imagem = lista.querySelector('.dashboard__item__img');
    let nome = lista.querySelector('.dashboard__item__name');
    // Variáveis que pegam da lista o botão, a imagem e o nome do jogo.

    if (botao.classList.contains('dashboard__item__button--return')) {

        botao.classList.remove('dashboard__item__button--return');
        imagem.classList.remove('dashboard__item__img--rented');
        // Se a classe do botão contém a classe de alugado, remove a classe de alugado da imagem e do botão.
        botao.textContent = 'Alugar';
        // Muda o texto do botão.
        alert(`O jogo ${nome.textContent} foi devolvido.`);
        // Alerta quando o jogo for alugado.
        jogosAlugados--;
        // -1 jogo alugado.

    } else {

            botao.classList.add('dashboard__item__button--return');
            imagem.classList.add('dashboard__item__img--rented');
            // Se não, adiciona a classe de alugado no botão e na imagem.
            botao.textContent = 'Devolver';
            // Muda o texto do botão.
            jogosAlugados++;
            // +1 jogo alugado.
        }
}