import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../CSS/EstiloGeral.css';

function Carrinho() {
  const navigate = useNavigate();
  const [carrinho, setCarrinho] = useState([]);

  const resolveImageUrl = (fotoUrl) => {
    if (fotoUrl?.startsWith("http")) {
        return fotoUrl;
    }
    return `http://localhost:8080${fotoUrl}`;
}

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

  const irParaPagamento = () => navigate('/pagamento');

  return (
    <div className="container mt-5 text-light d-flex justify-content-center flex-column m-3">
      <h1 className='titulo'>Meu Carrinho</h1>
      <div id="carrinho" className="mt-4 d-flex justify-content-center flex-column m-3">
        {carrinho.length === 0 ? (
          <p className="empty-cart">Seu carrinho está vazio.</p>
        ) : (
          carrinho.map((item, index) => (
            <div key={index} className="item-carrinho mb-3 p-3 d-flex flex-column" >
              <h3>{item.nome}</h3>
              <p>{item.descricao}</p>
              <p>
                <strong>Preço:</strong> R$ {item.preco.toFixed(2)}
              </p>
              <img src={resolveImageUrl(item.fotoUrl)} alt="Imagem indisponivel" /> 
              <button
                className="btn btn-danger m-3"
                onClick={() => removerDoCarrinho(index)}
              >
                Remover
              </button>
             
              <hr />
            </div>
            
          ))
        )}
      </div>
      <button
                className="btn btn-info m-3"
                onClick={irParaPagamento}
              >
                Ir para pagamento
              </button>
    </div>
  );
}

export default Carrinho;