document.addEventListener("DOMContentLoaded", function() {
    console.log("Página carregada!");

    // Adicionando o evento de clique ao botão
    document.getElementById("nintendo-link").addEventListener("click", function() {
        window.open("https://www.nintendo.com", "_blank");
    });
});
