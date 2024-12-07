// src/pages/Home.jsx
import React from 'react';

function Inicio() {
  return (
    <div>
      <main className="m-3 d-flex justify-content-center flex-column">
        <div className="d-flex justify-content-center">
          <div id="carouselExample" className="carousel slide col-8">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="../assets/Arquivos/Imagem 1.jpg"
                  className="img-fluid d-block w-100"
                  alt="..."
                  style={{ objectFit: 'cover', height: '100%' }}
                />
              </div>
              <div className="carousel-item">
                <img
                  src="../Arquivos/Imagem 2.jpg"
                  className="img-fluid d-block w-100"
                  alt="..."
                  style={{ objectFit: 'cover', height: '100%' }}
                />
              </div>
              <div className="carousel-item">
                <img
                  src="../fotos/Imagem 3.jpg"
                  className="img-fluid d-block w-100"
                  alt="..."
                  style={{ objectFit: 'cover', height: '100%' }}
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Inicio;
