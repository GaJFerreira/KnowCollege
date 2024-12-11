import React, { useEffect, useState } from 'react';
import Card from '../assets/Components/Card';

function MeusCursos() {
    const [meusCursos, setMeusCursos] = useState([]);


    const usuarioId = localStorage.getItem('usuarioLogado');

    // Função para buscar os cursos do usuário
    useEffect(() => {
        const fetchMeusCursos = async () => {
            if (!usuarioId) {
                console.error('Usuário não logado ou ID inválido.');
                return;
            }

            try {
                const response = await fetch(`http://localhost:8080/curso/meusCursos?usuarioId=${usuarioId}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                if (response.ok) {
                    const data = await response.json();
                    setMeusCursos(data); // Atualiza o estado com os cursos do usuário
                } else {
                    console.error('Erro ao buscar cursos do usuário:', response.statusText);
                }
            } catch (error) {
                console.error('Erro ao buscar cursos:', error);
            }
        };

        fetchMeusCursos();
    }, [usuarioId]);

    // Função para tratar cliques nos cards
    const handleCardClick = (id) => {
        console.log(`Curso clicado: ${id}`);
        // Adicione lógica, como redirecionamento ou exibição de detalhes
    };

    const resolveImageUrl = (fotoUrl) => {
        if (fotoUrl?.startsWith("http")) {
            return fotoUrl;
        }
        return `http://localhost:8080${fotoUrl}`;
    };

    return (
        <main className="m-3 d-flex flex-column align-items-center">
            <h1 className="text-center mb-4">Meus Cursos</h1>

            {/* Renderiza os Cards dinamicamente */}
            <div className="cards d-flex justify-content-center flex-wrap mt-4">
                {meusCursos.length > 0 ? (
                    meusCursos.map((curso) => (
                        <Card
                            key={curso.id}
                            id={curso.id}
                            title={curso.nome}
                            text={curso.descricao}
                            image={resolveImageUrl(curso.fotoUrl) || 'https://via.placeholder.com/150'} // Fallback para imagem
                            onClick={() => handleCardClick(curso.id)}
                        />
                    ))
                ) : (
                    <p className="text-center text-light mt-4">Você ainda não possui cursos cadastrados.</p>
                )}
            </div>
        </main>
    );
}

export default MeusCursos;
