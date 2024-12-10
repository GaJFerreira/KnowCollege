import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../CSS/EstiloGeral.css";

const CadastroCurso = () => {
  const [curso, setCurso] = useState({
    nome: "",
    descricao: "",
    cargaHoraria: "",
    descricaoDetalhada: "",
    categoria: "",
    preco: "",
    status: "",
    foto: null, // Para armazenar o arquivo da foto
  });

  const navigate = useNavigate();

  // Função para lidar com mudanças nos campos do formulário
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurso({
      ...curso,
      [name]: value,
    });
  };

  // Função para lidar com o upload de imagem
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setCurso({
      ...curso,
      foto: file, // Armazena o arquivo da imagem
    });
  };

  // Função para enviar o formulário e cadastrar o curso
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("foto", curso.foto); // Envia o arquivo como "foto"
    Object.keys(curso).forEach((key) => {
        if (key !== "foto") {
            formData.append(key, curso[key]);
        }
    });

    try {
        const response = await fetch("http://localhost:8080/curso/cadastro", {
            method: "POST",
            body: formData,
        });

        if (response.status === 201) {
            alert("Curso cadastrado com sucesso!");
            navigate("/inicio");
        } else {
            alert("Erro ao cadastrar o curso. Tente novamente.");
        }
    } catch (error) {
        console.error("Erro ao cadastrar o curso:", error);
        alert("Ocorreu um erro. Por favor, tente novamente mais tarde.");
    }
};

  return (
    <main className="d-flex align-items-center justify-content-center flex-colun">
      <div className="container mt-5">
        <form className="form p-3" onSubmit={handleSubmit}>
          <div className="form-header d-flex flex-colun align-items-center mb-3">
            <h1>Cadastro de Curso</h1>
          </div>

          <div className="d-flex flex-column bd-highlight justify-content-between">
            <div className="form-group mb-3">
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

            <div className="form-group mb-3">
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

            <div className="form-group mb-3">
              <label htmlFor="cargaHoraria">Carga Horária (em horas)</label>
              <input
                id="cargaHoraria"
                type="number"
                className="form-control"
                name="cargaHoraria"
                placeholder="Digite a carga horária do curso"
                value={curso.cargaHoraria}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group mb-3">
              <label htmlFor="descricaoDetalhada">Descrição Detalhada</label>
              <textarea
                id="descricaoDetalhada"
                className="form-control"
                name="descricaoDetalhada"
                placeholder="Digite a descrição detalhada do curso"
                rows="4"
                value={curso.descricaoDetalhada}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>

            <div className="form-group mb-3">
              <label htmlFor="categoria">Categoria do curso</label>
              <input
                id="categoria"
                type="text"
                className="form-control"
                name="categoria"
                placeholder="Digite a categoria do curso"
                value={curso.categoria}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group mb-3">
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

            <div className="form-group mb-3">
              <label htmlFor="status">Status</label>
              <select
                id="status"
                className="form-control"
                name="status"
                value={curso.status}
                onChange={handleInputChange}
                required
              >
                <option value="">Selecione o status</option>
                <option value="ativo">Ativo</option>
                <option value="inativo">Inativo</option>
              </select>
            </div>

            <div className="form-group mb-3">
              <label htmlFor="foto">Foto do Curso</label>
              <input
                id="foto"
                type="file"
                className="form-control"
                name="foto"
                onChange={handleFileChange}
                accept="image/*"
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
