function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const ListaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

for (let contador = 0; contador < ListaDeTeclas.length; contador++) {

    const tecla = ListaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    //template string
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        tocaSom(idAudio);
    }
    contador = contador + 1;
}