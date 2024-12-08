import React from 'react';
//import '../CSS/Biblioteca.css'; // Certifique-se de importar o CSS
import Card from '../assets/Components/Card';
import cursoJava from "../assets/Arquivos/CursoJava.png";
import cursoIngles from "../assets/Arquivos/CursoIngles.png";
import cursoHtml from "../assets/Arquivos/CursoHtml.png";
import cursoPython from "../assets/Arquivos/CursoPython.png";

// Declarando o array de cursos
const cursos = [
  {
    nome: "Curso Java",
    descricao: "Aprenda Java do básico ao avançado.",
    imagem: cursoJava,
    alt: "Curso Java",
    categoria: "java",
  },
  {
    nome: "Curso de Inglês",
    descricao: "Aprenda inglês de forma prática e rápida.",
    imagem: cursoIngles,
    alt: "Curso de Inglês",
    categoria: "ingles",
  },
  {
    nome: "Curso de HTML",
    descricao: "Curso completo de HTML e CSS.",
    imagem: cursoHtml,
    alt: "Curso HTML",
    categoria: "html",
  },
  {
    nome: "Curso de Python",
    descricao: "Aprenda Python do zero ao avançado.",
    imagem: cursoPython,
    alt: "Curso de Python",
    categoria: "python",
  },
];

function BibliotecaDeCursos() {
  // Função para carregar os detalhes do curso
  const carregarDescricao = (categoria) => {
    console.log(`Detalhes do curso: ${categoria}`);
    // Aqui você pode implementar a navegação ou lógica de exibir os detalhes do curso
  };

  return (
    <main className= "m-3 d-flex justify-content-center flex-column" >

      <h1 className="text-center">Biblioteca de Cursos</h1>

      <div className="d-flex justify-content-center ">
        {cursos.map((curso, index) => (
          <div key={index} className="col-md-3 mb-4">
            <Card
              title={curso.nome}
              text={curso.descricao}
              image={curso.imagem}
              onClick={() => carregarDescricao(curso.categoria)}
            />
          </div>
        ))}
      </div>

    </main>
  );
}

export default BibliotecaDeCursos;
