const container = document.querySelector(".container")
const inputFiltro = document.getElementById('filtro-vaga');
const listaVagas = document.getElementById('lista-vagas');
const vagas = listaVagas.getElementsByClassName('vaga-item');

inputFiltro.addEventListener('input', function () {
    const termo = inputFiltro.value.toLowerCase();

    for (let i = 0; i < vagas.length; i++) {
        const vagaTexto = vagas[i].textContent.toLowerCase();

        if (vagaTexto.includes(termo)) {
            vagas[i].style.display = 'block';
        } else {
            vagas[i].style.display = 'none';
        }
    }
});