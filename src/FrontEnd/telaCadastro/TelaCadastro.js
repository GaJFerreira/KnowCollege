function fazerCadastro(event) {
    event.preventDefault(); // Impede o envio do formulário automaticamente
    // Aqui você pode incluir a lógica para salvar os dados do cadastro, se necessário
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const number = document.getElementById('number').value;
    const password = document.getElementById('password').value;
    
    if (name && email && number && password) {
        localStorage.setItem('usuarioLogado', true);
        alert('Cadastro bem-sucedido!');
        // Verifique se há um curso pendente para adicionar ao carrinho
        const cursoPendente = localStorage.getItem('cursoPendente');
        if (cursoPendente) {
            const curso = JSON.parse(cursoPendente);
            adicionarCursoAoCarrinho(curso.nome, curso.descricao, curso.preco);
            // Limpe o curso pendente após adicioná-lo ao carrinho
            localStorage.removeItem('cursoPendente');
        }
        // Redirecionar para a tela inicial (ou carrinho)
        window.location.href = '../telaInicial/TelaInicial.html';
         // Atualize o caminho conforme necessário
    } else {
        alert('Por favor, preencha todos os campos!');
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