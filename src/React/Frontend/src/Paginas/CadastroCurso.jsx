import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'; // Importando useNavigate
import '../CSS/CadastroCurso.css'; // Certifique-se de importar o CSS

const CadastroCurso = () => {
    const [curso, setCurso] = useState({
        nome: "",
        descricao: "",
        cargaHoraria: "",
        descricaoDetalhada: "",
        categoria: "",
        preco: "",
        status: "",
        fotoUrl: "",
    });

    const navigate = useNavigate(); // Usando useNavigate

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
        navigate("/inicio"); // Redireciona para a página inicial após cadastro
    };

    return (
        <main className="d-flex align-items-center justify-content-center">
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

                        <div className="form-group">
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

                        <div className="form-group">
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

                        <div className="form-group">
                            <label htmlFor="fotoUrl">URL da Foto</label>
                            <input
                                id="fotoUrl"
                                type="text"
                                className="form-control"
                                name="fotoUrl"
                                placeholder="Digite a URL da foto do curso"
                                value={curso.fotoUrl}
                                onChange={handleInputChange}
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
