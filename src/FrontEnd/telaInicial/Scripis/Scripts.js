function verificarLogin() {
    const usuarioLogado = localStorage.getItem('usuarioLogado');
    
    if (usuarioLogado) {
        // Se o usuário estiver logado, esconda o botão de login e mostre os botões do carrinho e cadastro
        document.getElementById('botaoLogin').style.display = 'none';
        document.getElementById('botaoCadastrar').style.display = 'none';
        document.getElementById('botaoCarrinho').style.display = 'inline-block';
        document.getElementById('botaoLogout').style.display = 'inline-block';
        document.getElementById('botaoCadastroCurso').style.display = 'inline-block'; // Mostra o botão "Adicionar Cursos"
    } else {
        // Se o usuário não estiver logado, esconda o botão do carrinho e mostre o botão de login
        document.getElementById('botaoCarrinho').style.display = 'none';
        document.getElementById('botaoLogout').style.display = 'none';
        document.getElementById('botaoLogin').style.display = 'inline-block';
        document.getElementById('botaoCadastrar').style.display = 'inline-block';
        document.getElementById('botaoCadastroCurso').style.display = 'none'; // Esconde o botão "Adicionar Cursos"
    }
}
window.onload = verificarLogin;

function irParaLogin(){

    const url = `../HTML/TelaLogin.html`;
    window.location.href = url;
}

function irParaCadastro(){

    const url = `../HTML/TelaCadastro.html`;
    window.location.href = url;
}

function irParaCarrinho() {
    window.location.href = '../HTML/TelaCarrinho.html';
}

function logout() {
    localStorage.removeItem('usuarioLogado');
    
    window.location.href = '../HTML/TelaInicial.html';
}
function CadastroCurso() {
    window.location.href = "../HTML/TelaCadastroCurso.html";
}