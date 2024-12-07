import React from 'react';

function Card({ imagem, titulo, descricao, onDetalhes }) {
  return (
    <div className="card m-2" style={{ width: '18rem', backgroundColor: 'transparent', color: 'white', boxShadow: '10px 10px 20px rgba(0, 0, 0, 0.4)', border: '2px solid #454545' }}>
      <img src={imagem} className="card-img-top" alt={titulo} style={{ height: '50%' }} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{titulo}</h5>
        <p className="card-text">{descricao}</p>
        <button className="btn btn-info me-2" type="button" onClick={onDetalhes}>
          Ver Detalhes
        </button>
      </div>
    </div>
  );
}

export default Card;
