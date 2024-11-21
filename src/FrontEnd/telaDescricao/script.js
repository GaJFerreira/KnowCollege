window.onload = function() {
    // Recupera os dados do curso armazenados no localStorage
    const cursoSelecionado = JSON.parse(localStorage.getItem('cursoSelecionado'));

    if (cursoSelecionado) {
        // Preenche os elementos HTML com os dados do curso
        document.getElementById('cursoNome').textContent = cursoSelecionado.nome;
        document.getElementById('cursoDescricao').textContent = cursoSelecionado.descricao;
        document.getElementById('cursoPreco').textContent = `Preço: ${cursoSelecionado.preco}`;
    } else {
        // Se os dados não estiverem disponíveis, exibe uma mensagem de erro
        document.getElementById('cursoNome').textContent = "Curso não encontrado";
    }
}

function adicionarAoCarrinho() {
    const cursoSelecionado = JSON.parse(localStorage.getItem('cursoSelecionado'));

    if (cursoSelecionado) {
        const cursoNome = cursoSelecionado.nome;
        const cursoDescricao = cursoSelecionado.descricao;
        const cursoPreco = cursoSelecionado.preco;

        const usuarioLogado = localStorage.getItem('usuarioLogado'); // Verifique se o usuário está logado

        if (usuarioLogado) {
            // Se o usuário estiver logado, adicione o curso diretamente ao carrinho
            adicionarCursoAoCarrinho(cursoNome, cursoDescricao, cursoPreco);
            alert(`${cursoNome} foi adicionado ao carrinho!`);
            window.location.href = '../telaCarrinho/TelaCarrinho.html'; // Redireciona para o carrinho
        } else {
            // Se o usuário não estiver logado, salve o curso pendente e redirecione para o login
            localStorage.setItem('cursoPendente', JSON.stringify({
                nome: cursoNome,
                descricao: cursoDescricao,
                preco: cursoPreco
            }));
            alert('Você precisa fazer login para adicionar ao carrinho.');
            window.location.href = '../telaLogin/TelaLogin.html'; // Redireciona para a página de login
        }
    }
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