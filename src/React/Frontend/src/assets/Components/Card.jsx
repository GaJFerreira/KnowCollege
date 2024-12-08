import React from 'react';

function Card({ title, text, image, onClick }) {
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
        <button className="btn btn-info me-2" type="button" onClick={onClick}>
          Ver Detalhes
        </button>
      </div>
    </div>
  );
}

export default Card;
