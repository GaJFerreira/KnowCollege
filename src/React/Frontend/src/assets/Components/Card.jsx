import React from 'react';
import { useNavigate } from 'react-router-dom';

function Card({ id, title, text, image }) {
  const navigate = useNavigate();

  // Função para resolver o URL da imagem
  const resolveImageUrl = (imageUrl) => {
    if (imageUrl?.startsWith('http')) {
      return imageUrl; // Se a URL já for completa, retorna como está
    }
    return `http://localhost:8080${imageUrl}`; // Adiciona o domínio base à URL relativa
  };

  const irParaDescricao = () => {
    navigate(`/descricao/${id}`); // Passa o ID como parte da URL
  };

  return (
    <div
      className="card m-2"
      style={{
        width: '18rem',
        backgroundColor: 'transparent',
        color: 'white',
        boxShadow: '10px 10px 20px rgba(0, 0, 0, 0.4)',
        border: '2px solid #454545',
      }}
    >
      <img
        src={resolveImageUrl(image)} // Resolve a URL da imagem
        className="card-img-top"
        alt={title}
        style={{ height: '50%' }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <button className="btn btn-info me-2" type="button" onClick={irParaDescricao}>
          Ver Detalhes
        </button>
      </div>
    </div>
  );
}

export default Card;
