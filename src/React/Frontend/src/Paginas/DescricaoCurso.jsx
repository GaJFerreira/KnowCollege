import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function DescricaoCurso() {
  const { id } = useParams(); // Captura o parâmetro "id" da URL
  const [curso, setCurso] = useState(null); // Estado para armazenar os dados do curso
  const [erro, setErro] = useState(''); // Estado para armazenar mensagens de erro

  // Função para resolver o URL da imagem
  const resolveImageUrl = (fotoUrl) => {
    if (fotoUrl?.startsWith("http")) {
      return fotoUrl; // Se a URL já for completa, retorna como está
    }
    return `http://localhost:8080${fotoUrl}`; // Caso contrário, adiciona o domínio à URL
  };

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
          setCurso(data); // Armazena os dados do curso no estado
        } else {
          const errorMessage = await response.text(); // Lê a mensagem de erro do backend
          setErro(errorMessage || 'Erro ao carregar o curso!');
        }
      } catch (error) {
        console.error('Erro ao carregar curso:', error);
        setErro('Erro ao conectar ao servidor. Tente novamente mais tarde.');
      }
    };

    fetchCurso();
  }, [id]); ~~

  return (
    <div className="text-light container mt-4">
      <h1>Descrição do Curso</h1>
      {erro ? (
        <p className="text-danger">{erro}</p>
      ) : curso ? (
        <div>
          <h2>{curso.nome}</h2>
          <p>{curso.descricaoDetalhada || curso.descricao}</p> {/* Caso descricaoDetalhada seja nula, usa descricao */}
          <img
            src={resolveImageUrl(curso.fotoUrl)} // Resolve a URL da imagem
            alt={curso.nome}
            className="img-fluid"
            style={{ maxWidth: '100%' }}
          />
        </div>
      ) : (
        <p>Carregando informações do curso...</p>
      )}
    </div>
  );
}

export default DescricaoCurso;
