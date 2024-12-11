import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TelaDePagamento = () => {
  const [itensCarrinho, setItensCarrinho] = useState([]);
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();

  // Recuperar o carrinho do localStorage
  const recuperarCarrinho = () => {
    const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    setItensCarrinho(carrinho);
    calcularTotal(carrinho);
  };

  // Formatar o preço em formato de moeda
  const formatarPreco = (valor) => {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valor);
  };

  // Calcular o total do carrinho
  const calcularTotal = (carrinho) => {
    const total = carrinho.reduce((acc, produto) => acc + produto.preco * (produto.quantidade || 1), 0);
    setTotal(total);
  };

  // Finalizar a compra
  const finalizarCompra = async () => {
    if (itensCarrinho.length === 0) {
      alert('Seu carrinho está vazio!');
      return;
    }

    const usuarioId = localStorage.getItem('usuarioLogado');
    if (!usuarioId) {
      alert('Usuário não está logado. Faça login para continuar.');
      navigate('/login'); // Redireciona para a tela de login
      return;
    }
    const compraDto = {
      usuarioId,
      status: 'pago',
      valorTotal: total,
      dataCompra: new Date().toISOString(),
      cursosIds: itensCarrinho.map((produto) => produto.id),
    };

    try {
      const response = await fetch('http://localhost:8080/compra/finalizarCompra', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(compraDto),
      });

      if (response.ok) {
        alert(`Compra de ${formatarPreco(total)} foi realizada com sucesso!`);
        localStorage.removeItem('carrinho');
        setItensCarrinho([]);
        setTotal(0);
        navigate('/biblioteca'); // Redirecionar para a biblioteca ou outra página
      } else {
        const errorMessage = await response.text();
        alert(`Erro ao finalizar a compra: ${errorMessage}`);
      }
    } catch (error) {
      console.error('Erro ao finalizar compra:', error);
      alert('Ocorreu um erro ao processar sua compra. Tente novamente mais tarde.');
    }
    if (response.status === 401) {
      alert('Você precisa fazer login para finalizar a compra.');
      navigate('/login');
    } else if (response.status >= 500) {
      alert('Erro no servidor. Tente novamente mais tarde.');
    }

  };

  // Carregar o carrinho ao montar o componente
  useEffect(() => {
    recuperarCarrinho();
  }, []);

  return (
    <div className="container" style={{ marginTop: '3rem' }}>
      <div className="text-light">
        <h1>Tela de Pagamento</h1>

        <div className="table-responsive">
          <table className="table">
            <thead className="text-dark">
              <tr>
                <th>Nome do Produto</th>
                <th>Descrição</th>
                <th>Preço</th>
                <th>Quantidade</th>
              </tr>
            </thead>
            <tbody>
              {itensCarrinho.length > 0 ? (
                itensCarrinho.map((produto, index) => (
                  <tr key={index}>
                    <td>{produto.nome}</td>
                    <td>{produto.descricao}</td>
                    <td>{formatarPreco(produto.preco)}</td>
                    <td>{produto.quantidade || 1}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-center">Carrinho vazio</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <p className="total">Total: {formatarPreco(total)}</p>

        <button className="btn btn-info me-2" onClick={finalizarCompra}>Finalizar Compra</button>
        <button className="btn btn-secondary" onClick={() => navigate('/carrinho')}>Voltar ao Carrinho</button>
      </div>
    </div>
  );
};

export default TelaDePagamento;
