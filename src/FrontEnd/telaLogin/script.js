function fazerLogin(event) {
    event.preventDefault(); // Impede o envio do formulário automaticamente

    const email = document.getElementById('email').value;
    const senha = document.getElementById('password').value;

    // Simulação de validação de login
    if (email === 'teste@1.com' && senha === '123') {
        // Armazenar o estado de login no localStorage
        localStorage.setItem('usuarioLogado', true);
        alert('Login bem-sucedido!');

        // Verifique se há um curso pendente para adicionar ao carrinho
        const cursoPendente = localStorage.getItem('cursoPendente');
        if (cursoPendente) {
            const curso = JSON.parse(cursoPendente);
            adicionarCursoAoCarrinho(curso.nome, curso.descricao, curso.preco);

            // Limpe o curso pendente após adicioná-lo ao carrinho
            localStorage.removeItem('cursoPendente');
        }

        // Redirecionar para a tela inicial (ou carrinho)
        window.location.href = '../telaInicial/TelaInicial.html'; // Atualize o caminho conforme necessário
    } else {
        alert('Usuário ou senha inválidos!');
    }
}

function redirecionar() {
    window.location.href = '../telaCadastro/TelaCadastro.html'; // Atualize o caminho conforme necessário
}

function adicionarCursoAoCarrinho(nome, descricao, preco) {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

    // Adicione o curso ao carrinho
    carrinho.push({
        nome: nome,
        descricao: descricao,
        preco: preco
    });

    // Atualize o carrinho no localStorage
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
}
