
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

function irParaCarrinho() {
    window.location.href = '../telaCarrinho/TelaCarrinho.html';
}

function logout() {
    localStorage.removeItem('usuarioLogado');
    
    window.location.href = '../telaInicial/TelaInicial.html';
}
function CadastroCurso() {
    window.location.href = "../telaCadastroCurso/TelaCadastroCurso.html";
}

window.redirecionar = function() {
    
    window.location.href = `../telaCadastro/TelaCadastro.html`;
}


function irParaLogin(){

    const url = `../telaLogin/TelaLogin.html`;
    window.location.href = url;
}

const cursos = {
    java: {
        nome: "Curso de Java",
        descricao: "Aprofunde seus conhecimentos em Java, uma das linguagens de programação mais populares, com foco em orientação a objetos, desenvolvimento de aplicações e boas práticas de programação.",
        preco: "R$10"
    },
    html: {
        nome: "Curso de HTML",
        descricao: "Aprenda a construir páginas web do zero com HTML. Descubra como estruturar conteúdo, usar tags essenciais e criar layouts responsivos que impressionam os visitantes.",
        preco: "R$20"
    },
    ingles: {
        nome: "Curso de Inglês",
        descricao: "Desenvolva suas habilidades em inglês com nosso curso interativo. Melhore sua compreensão auditiva, fala, leitura e escrita em um ambiente dinâmico e colaborativo.",
        preco: "R$30"
    },
    python: {
        nome: "Curso de Python",
        descricao: "Aprenda Python, uma linguagem versátil e fácil de usar, com aplicações em desenvolvimento web, ciência de dados e automação. Aprofunde-se em programação com projetos práticos.",
        preco: "R$40"
    }
};


function carregarDescricao(cursoId) {
    // Busca os detalhes do curso com base no ID
    const curso = cursos[cursoId];

    // Armazena o curso selecionado no localStorage
    localStorage.setItem('cursoSelecionado', JSON.stringify(curso));

    // Redireciona para a página de detalhes
    window.location.href = '../telaDescricao/TelaDescricao.html';
}












