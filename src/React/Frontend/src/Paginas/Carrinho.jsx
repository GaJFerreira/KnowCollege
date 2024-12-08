import React, { useState, useEffect } from 'react';
import '../CSS/Carrinho.css'; // Certifique-se de importar o CSS

function Carrinho() {
  const [carrinho, setCarrinho] = useState([]);

  // Carrega os itens do carrinho do localStorage quando o componente monta
  useEffect(() => {
    const itens = JSON.parse(localStorage.getItem('carrinho')) || [];
    setCarrinho(itens);
  }, []);

  // Função para remover um item do carrinho
  const removerDoCarrinho = (index) => {
    const novoCarrinho = [...carrinho];
    novoCarrinho.splice(index, 1);
    setCarrinho(novoCarrinho);
    localStorage.setItem('carrinho', JSON.stringify(novoCarrinho));
  };

  return (
    <div className="container mt-5">
      <h1>Meu Carrinho</h1>
      <div id="carrinho" className="mt-4">
        {carrinho.length === 0 ? (
          <p className="empty-cart">Seu carrinho está vazio.</p>
        ) : (
          carrinho.map((item, index) => (
            <div key={index} className="item-carrinho mb-3 p-3" style={{ backgroundColor: '#f8f9fa', border: '1px solid #ddd', borderRadius: '5px' }}>
              <h3>{item.nome}</h3>
              <p>{item.descricao}</p>
              <p>
                <strong>Preço:</strong> R$ {item.preco.toFixed(2)}
              </p>
              <button
                className="btn btn-danger"
                onClick={() => removerDoCarrinho(index)}
              >
                Remover
              </button>
              <hr />
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Carrinho;
