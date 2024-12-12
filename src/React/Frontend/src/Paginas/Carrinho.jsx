import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../CSS/EstiloGeral.css';
import '../Css/Carrinho.css';

function Carrinho() {
  const navigate = useNavigate();
  const [carrinho, setCarrinho] = useState([]);

  // Função para resolver a URL da imagem
  const resolveImageUrl = (fotoUrl) => {
    if (fotoUrl?.startsWith("http")) {
      return fotoUrl;
    }
    return `http://localhost:8080${fotoUrl}`;
  };

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

  // Função para calcular o valor total do carrinho
  const calcularTotal = () => {
    return carrinho.reduce((total, item) => total + item.preco, 0).toFixed(2);
  };

  // Redireciona para a tela de pagamento
  const irParaPagamento = () => navigate('/pagamento');

  return (
    <div className="container mt-5 text-light d-flex justify-content-center flex-column m-3">
      <h1 className="titulo">Meu Carrinho</h1>
      <div id="carrinho" className="mt-4 d-flex flex-column">
        {carrinho.length === 0 ? (
          <p className="empty-cart">Seu carrinho está vazio.</p>
        ) : (
          carrinho.map((item, index) => (
            <div key={index} className="item-carrinho mb-3 p-3 d-flex align-items-center">
              <img
                src={resolveImageUrl(item.fotoUrl)}
                alt="Imagem indisponível"
                className="img-carrinho me-3"
              />
              <div className="info-carrinho">
                <h3>{item.nome}</h3>
                <p>{item.descricao}</p>
                <p>
                  <strong>Preço:</strong> R$ {item.preco.toFixed(2)}
                </p>
                <button
                  className="btn btn-danger mt-2"
                  onClick={() => removerDoCarrinho(index)}
                >
                  Remover
                </button>
              </div>
            </div>
          ))
        )}
      </div>
      {carrinho.length > 0 && (
        <div className="d-flex justify-content-between align-items-center mt-3">
          <p className="total-carrinho fs-4">
            <strong>Total: R$ {calcularTotal()}</strong>
          </p>
          <button
            className="btn btn-info"
            onClick={irParaPagamento}
          >
            Ir para pagamento
          </button>
        </div>
      )}
    </div>
  );
}

export default Carrinho;
