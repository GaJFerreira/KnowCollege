import React, { useEffect, useState } from 'react';
import Card from '../assets/Components/Card';
import imagem1 from "../assets/Arquivos/Imagem 1.jpg";
import imagem2 from "../assets/Arquivos/Imagem 2.jpg";
import imagem3 from "../assets/Arquivos/Imagem 3.jpg";

function Inicio() {
    // Estado para armazenar os cursos
    const [cursos, setCursos] = useState([]);

    // Função para buscar os cursos
    useEffect(() => {
        const fetchCursos = async () => {
            try {
                const response = await fetch('http://localhost:8080/curso/inicio', {
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

    // Função para lidar com cliques nos cards
    const handleCardClick = (id) => {
        console.log(`Card clicado: ${id}`);
        // Adicione a lógica de redirecionamento ou ação aqui
    };

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

      <h1 className="text-center mb-4">Cursos em destaque</h1>

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
        </div>
    );
}

export default Inicio;
