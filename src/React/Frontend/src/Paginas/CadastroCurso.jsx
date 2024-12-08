import React, { useState } from "react";
import { useHistory } from "react-router-dom"; // Para navegação
import '../CSS/EstiloGeral.css'; // Certifique-se de importar o CSS

const CadastroCurso = () => {
  const [curso, setCurso] = useState({
    nome: "",
    descricao: "",
    categoria: "",
    duracao: "",
    nivel: "",
    preRequisitos: "",
    conteudo: "",
    recursos: "",
    instrutor: "",
    preco: "",
  });

  const history = useHistory();

  // Função para lidar com mudanças nos campos do formulário
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurso({
      ...curso,
      [name]: value,
    });
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode fazer a lógica para salvar o curso, por exemplo, enviar para uma API ou localStorage
    alert("Curso Cadastrado!");
    history.push("/telaInicial"); // Redireciona para a página inicial após cadastro
  };

  return (
    <main className="d-flex w-100 align-items-center justify-content-center">
      <div className="container m-3">
        <form className="form p-3" onSubmit={handleSubmit}>
          <div className="input-group">
            <div className="form-group">
              <label htmlFor="nome">Nome do curso</label>
              <input
                id="nome"
                type="text"
                className="form-control"
                name="nome"
                placeholder="Digite o título do seu curso"
                value={curso.nome}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="descricao">Descrição do curso</label>
              <textarea
                id="descricao"
                className="form-control"
                name="descricao"
                placeholder="Digite a descrição do seu curso"
                rows="4"
                value={curso.descricao}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>

            <div className="form-group">
              <label htmlFor="categoria">Categoria do curso</label>
              <input
                id="categoria"
                type="text"
                className="form-control"
                name="categoria"
                placeholder="Digite a categoria do seu curso"
                value={curso.categoria}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="duracao">Duração (em horas)</label>
              <input
                id="duracao"
                type="number"
                className="form-control"
                name="duracao"
                placeholder="Digite a duração do curso"
                value={curso.duracao}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="nivel">Nível de Dificuldade</label>
              <select
                id="nivel"
                className="form-control"
                name="nivel"
                value={curso.nivel}
                onChange={handleInputChange}
                required
              >
                <option value="">Selecione um nível</option>
                <option value="iniciante">Iniciante</option>
                <option value="intermediario">Intermediário</option>
                <option value="avancado">Avançado</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="preRequisitos">Pré-requisitos</label>
              <textarea
                id="preRequisitos"
                className="form-control"
                name="preRequisitos"
                placeholder="Digite os pré-requisitos (se houver)"
                rows="2"
                value={curso.preRequisitos}
                onChange={handleInputChange}
              ></textarea>
            </div>

            <div className="form-group">
              <label htmlFor="conteudo">Conteúdo do Curso</label>
              <textarea
                id="conteudo"
                className="form-control"
                name="conteudo"
                placeholder="Descreva o conteúdo do curso"
                rows="4"
                value={curso.conteudo}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>

            <div className="form-group">
              <label htmlFor="recursos">Recursos Adicionais</label>
              <textarea
                id="recursos"
                className="form-control"
                name="recursos"
                placeholder="Descreva os recursos adicionais (se houver)"
                rows="2"
                value={curso.recursos}
                onChange={handleInputChange}
              ></textarea>
            </div>

            <div className="form-group">
              <label htmlFor="instrutor">Instrutor</label>
              <input
                id="instrutor"
                type="text"
                className="form-control"
                name="instrutor"
                placeholder="Digite o nome do instrutor"
                value={curso.instrutor}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="preco">Preço (R$)</label>
              <input
                id="preco"
                type="number"
                className="form-control"
                name="preco"
                placeholder="Digite o preço do curso"
                value={curso.preco}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div className="d-grid gap-2 col-6 mx-auto">
            <button type="submit" className="btn btn-info">
              Cadastrar Curso
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default CadastroCurso;
