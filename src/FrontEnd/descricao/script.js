function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

document.getElementById('cursoNome').innerText = getQueryParam('nome');
document.getElementById('cursoDescricao').innerText = getQueryParam('descricao');
document.getElementById('cursoPreco').innerText = `Preço: ${getQueryParam('preco')}`;

function adicionarAoCarrinho() {
    const cursoNome = getQueryParam('nome');
    const cursoDescricao = getQueryParam('descricao');
    const cursoPreco = getQueryParam('preco');
    
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
