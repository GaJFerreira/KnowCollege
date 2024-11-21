// Recupera o carrinho do localStorage
let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

// Função para remover o "R$" e converter o preço para número
function converterPreco(preco) {
    return Number(preco.replace("R$", "").replace(",", "."));
}

// Referências para os elementos HTML
const carrinhoItens = document.getElementById('carrinho-itens');
const totalPreco = document.getElementById('total-preco');

// Função para atualizar o carrinho na página
function atualizarCarrinho() {
    carrinhoItens.innerHTML = ''; // Limpa os itens atuais
    let total = 0;

    // Itera pelos produtos no carrinho e exibe cada um
    carrinho.forEach(produto => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${produto.nome}</td>
            <td>${produto.descricao}</td>
            <td>${produto.preco}</td>
        `;
        carrinhoItens.appendChild(tr);
        total += converterPreco(produto.preco);
    });

    // Atualiza o valor total no HTML
    totalPreco.textContent = total.toFixed(2).replace(".", ",");
}
function FinalizarCompra() {
    const total = totalPreco.textContent; // Pega o valor total exibido no HTML
    alert(`Compra de R$ ${total} foi realizada com sucesso!`);
}



// Chama a função para carregar os dados do carrinho ao abrir a página
atualizarCarrinho();

