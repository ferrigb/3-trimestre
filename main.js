// script.js
// Exemplo: Mostrar/ocultar conteúdo ao clicar em um botão
const botao = document.getElementById('meuBotao');
const conteudo = document.getElementById('meuConteudo');

botao.addEventListener('click', () => {
    conteudo.classList.toggle('mostrar');
});