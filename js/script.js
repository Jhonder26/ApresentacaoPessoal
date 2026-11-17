// Seleciona o formulário de contato
const formulario = document.getElementById("formularioContato");

// Adiciona o evento de envio do formulário
formulario.addEventListener("submit", function(evento) {

    // Impede o envio real do formulário
    evento.preventDefault();

    // Obtém os valores dos campos
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    // Seleciona o elemento que mostrará o resultado
    const resultado = document.getElementById("mensagemResultado");

    // Verifica se todos os campos foram preenchidos
    if (nome === "" || email === "" || mensagem === "") {
        resultado.textContent = "Por favor, preencha todos os campos.";
        return;
    }

    // Verifica se o e-mail possui um formato válido
    const formatoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formatoEmail.test(email)) {
        resultado.textContent = "Por favor, digite um e-mail válido.";
        return;
    }

    // Exibe a mensagem de sucesso
    resultado.textContent = "Formulário validado com sucesso!";

    // Limpa os campos do formulário
    formulario.reset();

});