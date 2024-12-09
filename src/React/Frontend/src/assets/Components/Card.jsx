import React from 'react';
import { useNavigate } from 'react-router-dom';  // Importando o hook useNavigate

function Card({ id, title, text, image, onClick }) {
  const navigate = useNavigate();  // Hook para navegação

  const irParaDescricao = () => {
    navigate(`/descricao/${id}`);  // Navegar para a página de descrição passando o id
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
      <img src={image} className="card-img-top" alt={title} style={{ height: '50%' }} />
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
