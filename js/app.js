function alterarStatus(id) {

    let lista = document.getElementById(`game-${id}`);
    let botao = lista.querySelector('.dashboard__item__button');
    let imagem = lista.querySelector('.dashboard__item__img');
    let nome = lista.querySelector('.dashboard__item__name');

    if (botao.classList.contains('dashboard__item__button--return')) {

        botao.classList.remove('dashboard__item__button--return');
        imagem.classList.remove('dashboard__item__img--rented');
        botao.textContent = 'Alugar';
        alert(`O jogo ${nome.textContent} foi devolvido.`);

    } else {

            botao.classList.add('dashboard__item__button--return');
            imagem.classList.add('dashboard__item__img--rented');
            botao.textContent = 'Devolver';

        }
}