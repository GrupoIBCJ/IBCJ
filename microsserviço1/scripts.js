let indiceAtual = 0;

function moverCarrossel(direcao) {
    const carrossel = document.querySelector(".carrossel");
    const itens = carrossel.querySelectorAll(".carrossel-item");

    indiceAtual += direcao;

    if (indiceAtual < 0) {
        indiceAtual = itens.length - 1;
    } else if (indiceAtual >= itens.length) {
        indiceAtual = 0;
    }

    for (let i = 0; i < itens.length; i++) {
        itens[i].style.transform = itens[i].style.transform = `translateX(${-100 * indiceAtual}%)`;
    }
}



