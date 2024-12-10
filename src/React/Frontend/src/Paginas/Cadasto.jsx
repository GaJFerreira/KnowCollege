import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Cadastro() {
  const [erro, setErro] = useState('');
  const [sucesso, setSucesso] = useState('');
  const navigate = useNavigate();

  const fazerCadastro = async (event) => {
    event.preventDefault();
    const name = event.target.name.value.trim();
    const email = event.target.email.value.trim();
    const number = event.target.number.value.trim();
    const password = event.target.password.value.trim();

    // Validações
    if (!name || !email || !number || !password) {
      setErro('Por favor, preencha todos os campos!');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErro('Por favor, insira um email válido!');
      return;
    }

    const cadastroData = { nome: name, email, senha: password, tipo: 'Professor' };

    try {
      const response = await fetch('http://localhost:8080/usuario/cadastro', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(cadastroData),
      });

      if (response.ok) {
        const { message, id } = await response.json();
        setSucesso(message);
        localStorage.setItem('usuarioLogado', id);

        const cursoPendente = localStorage.getItem('cursoPendente');
        if (cursoPendente) {
          const curso = JSON.parse(cursoPendente);
          adicionarCursoAoCarrinho(curso.nome, curso.descricao, curso.preco);
          localStorage.removeItem('cursoPendente');
        }
        setTimeout(() => navigate('/inicio'), 2000); // Redireciona após 2 segundos
      } else {
        const errorMessage = await response.text();
        setErro(errorMessage || 'Erro ao realizar cadastro.');
      }
    } catch (error) {
      setErro('Ocorreu um erro. Tente novamente mais tarde.');
    }
  };

  const adicionarCursoAoCarrinho = (nome, descricao, preco) => {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    carrinho.push({ nome, descricao, preco });
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
  };

  return (
    <div className="container mt-5 P-3">
      <form onSubmit={fazerCadastro}>
        <h1>Cadastre-se</h1>
        {erro && <div className="alert alert-danger">{erro}</div>}
        {sucesso && <div className="alert alert-success">{sucesso}</div>}

        <label htmlFor="name">Nome completo</label>
        <input id="name" name="name" className="form-control" required />

        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" className="form-control" required />

        <label htmlFor="number">Celular</label>
        <input id="number" name="number" type="tel" className="form-control" required />

        <label htmlFor="password">Senha</label>
        <input id="password" name="password" type="password" className="form-control" required />

        <button type="submit" className="btn btn-info mt-3">Cadastrar</button>
      </form>
    </div>
  );
}

export default Cadastro;