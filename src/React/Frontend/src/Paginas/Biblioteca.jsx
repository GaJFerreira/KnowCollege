import React, { useState, useEffect } from 'react';
// import '../CSS/Biblioteca.css'; // Certifique-se de importar o CSS, se necessário
import Card from '../assets/Components/Card';

function BibliotecaDeCursos() {
  // Estado para armazenar os cursos
  const [cursos, setCursos] = useState([]);

  // Função para buscar os cursos
  useEffect(() => {
    const fetchCursos = async () => {
      try {
        const response = await fetch('http://localhost:8080/curso/biblioteca', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const data = await response.json();
        setCursos(data); // Atualiza o estado com os cursos recebidos
      } catch (error) {
        console.error('Erro ao buscar cursos:', error);
      }
    };

    fetchCursos();
  }, []);

  // Função para tratar cliques nos cards
  const handleCardClick = (id) => {
    console.log(`Curso clicado: ${id}`);
    // Adicione lógica, como redirecionamento ou exibição de detalhes
  };

  return (
    <main className="m-3 d-flex flex-column align-items-center">
      <h1 className="text-center mb-4">Biblioteca de Cursos</h1>

      {/* Renderiza os Cards dinamicamente */}
      <div className="cards d-flex justify-content-center flex-wrap mt-4">
        {cursos.length > 0 ? (
          cursos.map((curso) => (
            <Card
              key={curso.id}
              id={curso.id}
              title={curso.nome}
              text={curso.descricao}
              image={curso.fotoUrl || 'https://via.placeholder.com/150'} // Fallback para imagem
              onClick={() => handleCardClick(curso.id)}
            />
          ))
        ) : (
          <p className="text-center text-light mt-4">Nenhum curso disponível no momento.</p>
        )}
      </div>
    </main>
  );
}

export default BibliotecaDeCursos;
