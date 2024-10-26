
let btnMenu = document.getElementById('btn-menu');
let menu = document.getElementById('menu-mobile');
let overlay = document.getElementById('overlay-menu')

btnMenu.addEventListener('click', () => {
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', () => {
    menu.classList.remove('abrir-menu')
})

overlay.addEventListener('click', () => {
    menu.classList.remove('abrir-menu')
})



document.addEventListener('DOMContentLoaded', function () {
    // Seleciona todos os links do menu que possuem hash (âncora)
    const menuLinks = document.querySelectorAll('a[href^="#"]');

    // Adiciona o evento de clique para cada link
    menuLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault(); // Evita o comportamento padrão do link

            // Seleciona o destino (ID da seção)
            const targetID = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetID);

            // Faz a rolagem suave para a seção
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });

            // Opcional: Se for no mobile, fecha o menu ao clicar
            const btnMenu = document.getElementById('btn-menu');
            if (btnMenu && window.innerWidth <= 768) {
                const mobileMenu = document.getElementById('mobile-menu');
                mobileMenu.style.display = 'none'; // ou use toggle para ocultar
            }
        });
    });
});


const seeMoreBtn = document.getElementById("seeMoreBtn");
const hiddenProjects = document.querySelectorAll(".hiddenProjects .hidden");

seeMoreBtn.addEventListener("click", () => {
  hiddenProjects.forEach(project => {
    project.style.display = "block"; // Mostra os projetos escondidos
  });
  seeMoreBtn.style.display = "none"; // Esconde o botão "Ver mais"
});

// Seleciona o botão
const backToTopButton = document.getElementById('backToTop');

// Mostra o botão ao rolar para baixo
window.onscroll = function () {
    if (window.scrollY > 200) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};

// Função de clique para voltar ao topo
backToTopButton.onclick = function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};



function whatsapp() {
    var name = document.getElementById('nome').value;
    var phone = document.getElementById('telefone').value;
    var message = document.getElementById('mensagem').value;

    // Verifica se todos os campos estão preenchidos
    if (name === '' || phone === '' || message === '') {
        alert("Por favor, preencha todos os campos obrigatórios do formulário.");
        return false; // Impede o envio do formulário
    }

    var url = "https://wa.me/+5511999189875?text=" 
        + "Nome: " + name + "%0a" 
        + "Telefone: " + phone + "%0a"
        + "Mensagem: " + message;

    window.open(url, '_blank').focus();
    return false; // Impede o envio do formulário
}