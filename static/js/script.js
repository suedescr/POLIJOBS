document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    const container = document.querySelector(".container");
    const loginDiv = document.querySelector(".aut");
    const logoutBtn = document.getElementById("logout-btn");

    // Verifica se o usuário já está "logado"
    const user = localStorage.getItem("user");

    if (user) {
        container.style.display = "flex";
        loginDiv.style.display = "none";
    }

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const pass = document.getElementById("pass").value;

        if (name && pass) {
            localStorage.setItem("user", JSON.stringify({ name, pass }));
            container.style.display = "flex";
            loginDiv.style.display = "none";
        }
    });

    logoutBtn.addEventListener("click", function () {
        localStorage.removeItem("user");
        container.style.display = "none";
        loginDiv.style.display = "flex";
        loginForm.reset();
    });

    // Botões de candidatura
    document.querySelectorAll(".btn-candidatar").forEach(btn => {
        btn.addEventListener("click", function () {
            if (!btn.classList.contains("enviado")) {
                btn.classList.add("enviado");
                btn.textContent = "Candidatura enviada";
            }
        });
    });

    // Filtro de vagas
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
});
