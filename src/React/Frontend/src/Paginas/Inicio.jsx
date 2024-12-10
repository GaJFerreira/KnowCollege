import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../assets/Components/Card';
import imagem1 from "../assets/Arquivos/Imagem 1.jpg";
import imagem2 from "../assets/Arquivos/Imagem 2.jpg";
import imagem3 from "../assets/Arquivos/Imagem 3.jpg";
import imagem4 from "../uploads/1733442590854_CursoPython.png"
import "../Css/inicio.css";


function Inicio() {
    // Estado para armazenar os cursos
    const [cursos, setCursos] = useState([]);
    const navigate = useNavigate();

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
                if (response.ok) {
                    const data = await response.json();
                    setCursos(data); // Atualiza o estado com os cursos recebidos
                } else {
                    throw new Error('Erro ao carregar cursos');
                }
            } catch (error) {
                console.error('Erro ao buscar cursos:', error);
                alert('Não foi possível carregar os cursos no momento. Tente novamente mais tarde.');
            }
        };

        fetchCursos();
    }, []);

    // Função para lidar com cliques nos cards
    const handleCardClick = (id) => {
        navigate(`/curso/${id}`); // Redireciona para a página de detalhes do curso
    };
    const importaImg = (cursos) => {
        {
            cursos.map((curso, index) => (

                "Para cada fotoURL in curso execute 'import imagem3 from '../assets/Arquivos/Imagem 3.jpg';'"

            ))
        }
    }

    return (
        <div>
            {/* Carrossel */}
            <main className="m-3 d-flex justify-content-center flex-column">
                <div className="d-flex justify-content-center">
                    <div id="carouselExample" className="carousel slide col-8">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img
                                    src={imagem1}
                                    className="img-fluid d-block w-100"
                                    alt="Primeira imagem do carrossel"
                                    style={{ objectFit: 'cover', height: '500px' }}
                                />
                            </div>
                            <div className="carousel-item">
                                <img
                                    src={imagem2}
                                    className="img-fluid d-block w-100"
                                    alt="Segunda imagem do carrossel"
                                    style={{ objectFit: 'cover', height: '500px' }}
                                />
                            </div>
                            <div className="carousel-item">
                                <img
                                    src={imagem3}
                                    className="img-fluid d-block w-100"
                                    alt="Terceira imagem do carrossel"
                                    style={{ objectFit: 'cover', height: '500px' }}
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

            {/* Renderiza os Cards dinamicamente */}
            <div className="cards d-flex justify-content-center flex-wrap mt-4">
                {cursos.map((curso, index) => (
                    <Card
                        key={curso.id || `curso-${index}`}
                        id={curso.id}
                        title={curso.nome}
                        text={curso.descricao}
                        image={curso.fotoUrl}
                        onClick={() => handleCardClick(curso.id)}
                    />
                ))}
            </div>
        </div>
    );
}

export default Inicio;
