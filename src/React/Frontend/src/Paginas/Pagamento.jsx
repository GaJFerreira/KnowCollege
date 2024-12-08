import React, { useState, useEffect } from 'react';

const TelaDePagamento = () => {
  // Estado para armazenar os itens do carrinho e o total
  const [itensCarrinho, setItensCarrinho] = useState([]);
  const [total, setTotal] = useState(0);

  // Função para recuperar o carrinho do localStorage
  const recuperarCarrinho = () => {
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    setItensCarrinho(carrinho);
    calcularTotal(carrinho);
  };

  // Função para remover o "R$" e converter o preço para número
  const converterPreco = (preco) => {
    return Number(preco.replace('R$', '').replace(',', '.'));
  };

  // Função para calcular o total
  const calcularTotal = (carrinho) => {
    let total = 0;
    carrinho.forEach(produto => {
      total += converterPreco(produto.preco);
    });
    setTotal(total);
  };

  // Função para finalizar a compra
  const finalizarCompra = () => {
    alert(`Compra de R$ ${total.toFixed(2)} foi realizada com sucesso!`);
    // Limpa o carrinho após a compra
    localStorage.removeItem('carrinho');
    setItensCarrinho([]);
    setTotal(0);
  };

  // Carrega o carrinho ao montar o componente
  useEffect(() => {
    recuperarCarrinho();
  }, []);

  return (
    <div className="container" style={{ marginTop: '3rem' }}>
      <div className="text-light">
        <h1>Tela de Pagamento</h1>
        
        <table className="table">
          <thead className="text-dark">
            <tr>
              <th>Nome do Produto</th>
              <th>Descrição</th>
              <th>Preço</th>
            </tr>
          </thead>
          <tbody>
            {itensCarrinho.length > 0 ? (
              itensCarrinho.map((produto, index) => (
                <tr key={index}>
                  <td>{produto.nome}</td>
                  <td>{produto.descricao}</td>
                  <td>{produto.preco}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="text-center">Carrinho vazio</td>
              </tr>
            )}
          </tbody>
        </table>
        
        <p className="total">Total: R${total.toFixed(2).replace('.', ',')}</p>

        <button className="btn btn-info me-2" onClick={finalizarCompra}>Finalizar Compra</button>
      </div>
    </div>
  );
};

export default TelaDePagamento;
