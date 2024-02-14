function alterarStatus(btn,img) {
    let botao = document.getElementById(btn);
    let imagem = document.getElementById(img);
    // Pegando o Botão e a Imagem do HTML.

    if (botao.classList.contains('dashboard__item__button--return')) {
        // Se o botão for da classe desabilitada...
        botao.classList.remove('dashboard__item__button--return');
        imagem.classList.remove('dashboard__item__img--rented');
        //...remove a classe desabilitada.
        botao.innerHTML = 'Alugar';
        // E muda o texto do botão.
        
    } else {
        botao.classList.add('dashboard__item__button--return');
        imagem.classList.add('dashboard__item__img--rented');
        // Se não, adiciona a classe desabilitada.
        botao.innerHTML = 'Devolver';
        // E muda o texto do botão.
    }
}