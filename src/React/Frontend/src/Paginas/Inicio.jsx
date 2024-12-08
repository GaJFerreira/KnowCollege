// src/pages/Home.jsx
import React from 'react';
import Card from '../assets/Components/Card';
import imagem1 from "../assets/Arquivos/Imagem 1.jpg";
import imagem2 from "../assets/Arquivos/Imagem 2.jpg";
import imagem3 from "../assets/Arquivos/Imagem 3.jpg";
import cursoJava from "../assets/Arquivos/CursoJava.png";
import cursoIngles from "../assets/Arquivos/CursoIngles.png";
import cursoHtml from "../assets/Arquivos/CursoHtml.png";
import cursoPython from "../assets/Arquivos/CursoPython.png";

function Inicio() {
  return (
    <div>
      <main className="m-3 d-flex justify-content-center flex-column">
        <div className="d-flex justify-content-center">
          <div id="carouselExample" className="carousel slide col-8">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src={imagem1}
                  className="img-fluid d-block w-100"
                  alt="..."
                  style={{ objectFit: 'cover', height: '100%' }}
                />
              </div>
              <div className="carousel-item">
                <img
                  src={imagem2}
                  className="img-fluid d-block w-100"
                  alt="..."
                  style={{ objectFit: 'cover', height: '100%' }}
                />
              </div>
              <div className="carousel-item">
                <img
                  src={imagem3}
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

      {/* Cards */}
      <div className="cards d-flex justify-content-center flex-wrap mt-4">
        <Card
          title="Curso Java"
          text="Aprenda Java do básico ao avançado."
          image={cursoJava}
          onClick={() => handleCardClick('java')}
        />
        <Card
          title="Curso de Inglês"
          text="Aprenda inglês de forma prática e rápida."
          image={cursoIngles}
          onClick={() => handleCardClick('ingles')}
        />
        <Card
          title="Curso de HTML"
          text="Curso completo de HTML e CSS."
          image={cursoHtml}
          onClick={() => handleCardClick('html')}
        />
        <Card
          title="Curso de Python"
          text="Aprenda Python do zero ao avançado."
          image={cursoPython}
          onClick={() => handleCardClick('python')}
        />
      </div>


    </div>
  );
}

export default Inicio;
