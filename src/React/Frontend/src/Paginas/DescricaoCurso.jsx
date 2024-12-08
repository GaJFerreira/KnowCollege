import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const DescricaoCurso = () => {
  const [curso, setCurso] = useState(null);  // Estado para armazenar os dados do curso
  const navigate = useNavigate();  // Hook para navegação programática

  // Recupera os dados do curso do localStorage quando o componente é montado
  useEffect(() => {
    const cursoSelecionado = JSON.parse(localStorage.getItem('cursoSelecionado'));
    if (cursoSelecionado) {
      setCurso(cursoSelecionado);  // Atualiza o estado com os dados do curso
    } else {
      setCurso(null);  // Caso não encontre o curso no localStorage
    }
  }, []);  // Executa apenas uma vez quando o componente for montado

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
