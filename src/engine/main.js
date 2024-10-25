
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

