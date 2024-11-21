
// Função para carregar os itens do carrinho
const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

const carrinhoContainer = document.getElementById('carrinho');

function atualizarCarrinho() {
    carrinhoContainer.innerHTML = ''; // Limpa o conteúdo atual
    if (carrinho.length === 0) {
        carrinhoContainer.innerHTML = '<p class="empty-cart">Seu carrinho está vazio.</p>';
    } else {
        carrinho.forEach((item, index) => {
            const itemElement = document.createElement('div');
            itemElement.classList.add('item-carrinho');

            itemElement.innerHTML = `
                <h3>${item.nome}</h3>
                <p>${item.descricao}</p>
                <p>Preço: R$ ${item.preco}</p>
                <button class="btn btn-danger" onclick="removerDoCarrinho(${index})">Remover</button>
                <hr>
            `;

            carrinhoContainer.appendChild(itemElement);
        });
    }
}

function removerDoCarrinho(index) {
    carrinho.splice(index, 1);
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    atualizarCarrinho();
}

atualizarCarrinho();
