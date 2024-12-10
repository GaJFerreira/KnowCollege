import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const DescricaoCurso = () => {
  const { id } = useParams(); // Captura o ID da URL
  const navigate = useNavigate();
  const [curso, setCurso] = useState(null);

  useEffect(() => {
    const fetchCurso = async () => {
      try {
        const response = await fetch(`http://localhost:8080/curso/id?cursoiD=${id}`);
        if (response.ok) {
          const data = await response.json();
          setCurso(data);
        } else {
          console.error('Erro ao buscar o curso:', response.statusText);
        }
      } catch (error) {
        console.error('Erro na requisição:', error);
      }
    };

    fetchCurso();
  }, [id]);

  const adicionarAoCarrinho = () => {
    if (curso) {
      const usuarioLogado = localStorage.getItem('usuarioLogado');

      if (usuarioLogado) {
        let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
        carrinho.push(curso);
        localStorage.setItem('carrinho', JSON.stringify(carrinho));
        alert(`${curso.nome} foi adicionado ao carrinho!`);
        navigate('/carrinho');
      } else {
        localStorage.setItem('cursoPendente', JSON.stringify(curso));
        alert('Você precisa fazer login para adicionar ao carrinho.');
        navigate('/login');
      }
    }
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
        <h1>Carregando...</h1>
      )}
    </div>
  );
};

export default DescricaoCurso;
