function validarFormulario() {

    var nome = document.getElementById("nome");
    var email = document.getElementById("email");
    var telefone = document.getElementById("telefone");
    var texto = document.getElementById("texto");

    if (!nome.value || !email.value || !telefone.value || !texto.value) {
        exibirMensagemErro(nome, "mensagem-nome");
        exibirMensagemErro(email, "mensagem-email");
        exibirMensagemErro(telefone, "mensagem-telefone");
        exibirMensagemErro(texto, "mensagem-texto");
        aplicarEstiloErro();
        return;
    }

    aplicarEstiloSucesso();
    limparMensagensErro();
}

function exibirMensagemErro(campo, idMensagem) {
    var mensagem = document.getElementById(idMensagem);
    if (!campo.value.trim()) {
        mensagem.textContent = "Campo obrigatório";
        mensagem.style.color = "red";
    } else {
        mensagem.textContent = "";
    }
}

function aplicarEstiloErro() {

    var campos = document.querySelectorAll('.input-text');
    campos.forEach(function(campo) {
        if (!campo.value.trim()) {
            campo.classList.add('input-erro');
        } else {
            campo.classList.remove('input-sucesso');
        }
    });
}

function aplicarEstiloSucesso() {

    var campos = document.querySelectorAll('.input-text');
    campos.forEach(function(campo) {
        campo.classList.remove('input-erro');
        campo.classList.add('input-sucesso');
    });
}

function limparMensagensErro() {
    var mensagens = document.querySelectorAll('.mensagem-erro');
    mensagens.forEach(function(mensagem) {
        mensagem.textContent = "";
    });
}