import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const DescricaoCurso = () => {
  const [curso, setCurso] = useState(null);  // Estado para armazenar os dados do curso
  const [loading, setLoading] = useState(true); // Estado de carregamento
  const [error, setError] = useState(null); // Estado de erro
  const { id } = useParams();  // Pega o ID da URL
  const navigate = useNavigate();  // Hook para navegação programática

  // Recupera os dados do curso da API baseado no ID da URL
  useEffect(() => {
    const fetchCurso = async () => {
      try {
        const response = await fetch(`http://localhost:8080/curso/${id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          const data = await response.json();
          setCurso(data);  // Atualiza o estado com os dados do curso
        } else {
          throw new Error('Curso não encontrado');
        }
      } catch (error) {
        setError(error.message);  // Se ocorrer erro, armazena a mensagem
      } finally {
        setLoading(false);  // Indica que a requisição terminou
      }
    };

    fetchCurso();
  }, [id]);  // Executa sempre que o ID mudar

  // Função para adicionar o curso ao carrinho
  const adicionarAoCarrinho = () => {
    if (curso) {
      const usuarioLogado = localStorage.getItem('usuarioLogado');  // Verifica se o usuário está logado

      if (usuarioLogado) {
        // Se o usuário estiver logado, adiciona o curso ao carrinho
        adicionarCursoAoCarrinho(curso);
        alert(`${curso.nome} foi adicionado ao carrinho!`);
        navigate('/carrinho');  // Redireciona para a página do carrinho
      } else {
        // Se o usuário não estiver logado, salva o curso pendente e redireciona para o login
        localStorage.setItem('cursoPendente', JSON.stringify(curso));
        alert('Você precisa fazer login para adicionar ao carrinho.');
        navigate('/login');  // Redireciona para a página de login
      }
    }
  };

  // Função para adicionar o curso ao carrinho
  const adicionarCursoAoCarrinho = (curso) => {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    carrinho.push(curso);  // Adiciona o curso ao carrinho
    localStorage.setItem('carrinho', JSON.stringify(carrinho));  // Atualiza o carrinho no localStorage
  };

  if (loading) {
    return <p>Carregando...</p>;  // Exibe enquanto os dados estão sendo carregados
  }

  if (error) {
    return <p>{error}</p>;  // Exibe erro se houver falha na requisição
  }

  return (
    <div className="container" style={{ marginTop: '3rem' }}>
      {curso ? (
        <>
          <h1>{curso.nome}</h1>
          <p>{curso.descricao}</p>
          <p>Preço: {curso.preco}</p>
          <button className="btn btn-success" onClick={adicionarAoCarrinho}>Adicionar ao Carrinho</button>
          <button className="btn btn-secondary" onClick={() => navigate(-1)}>Voltar</button>
        </>
      ) : (
        <h1>Curso não encontrado</h1>
      )}
    </div>
  );
};

export default DescricaoCurso;
