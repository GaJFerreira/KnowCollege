import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../CSS/EstiloGeral.css'; // Certifique-se de importar o CSS

function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const navigate = useNavigate();

  const fazerLogin = async (event) => {
    event.preventDefault(); // Impede o envio automático do formulário

    try {
      const response = await fetch('http://localhost:8080/usuario/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          senha: senha,
        }),
      });

      if (response.ok) {
        const token = await response.json(); // Aqui você pode tratar a resposta do backend, como um token ou uma mensagem
        localStorage.setItem('usuarioLogado', token);

        // Verifique se há um curso pendente para adicionar ao carrinho
        const cursoPendente = localStorage.getItem('cursoPendente');
        if (cursoPendente) {
          const curso = JSON.parse(cursoPendente);
          adicionarCursoAoCarrinho(curso.nome, curso.descricao, curso.preco);

          // Limpe o curso pendente após adicioná-lo ao carrinho
          localStorage.removeItem('cursoPendente');
        }

        // Redirecionar para a tela inicial
        navigate('/inicio');
      } else {
        const errorMessage = await response.text(); // Lê a mensagem de erro do backend
        setErro(errorMessage || 'Usuário ou senha inválidos!');
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      setErro('Erro ao conectar ao servidor. Tente novamente mais tarde.');
    }

  };

  const adicionarCursoAoCarrinho = (nome, descricao, preco) => {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

    // Adiciona o curso ao carrinho
    carrinho.push({
      nome: nome,
      descricao: descricao,
      preco: preco
    });

    // Atualiza o carrinho no localStorage
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
  };

  const handleCadastro = () => {
    navigate('/cadastro');
  };

  return (
    <div>

      <main className="m-3 d-flex justify-content-center flex-column text-light">
        <div className="">
          <div className="shadow-lg p-3 justify-content-center d-flex">
            <form onSubmit={fazerLogin}>
              <h1>Login</h1>
              <div className="mb-3">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Digite seu email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="password">Senha</label>
                <input
                  id="password"
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Digite sua senha"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  required
                />
              </div>

              {erro && <p style={{ color: 'red' }}>{erro}</p>}

              <button type="submit" className="btn btn-info">Login</button>
            </form>

            <button className="btn btn-link mt-1" onClick={handleCadastro}>
              Cadastrar-se
            </button>
          </div>
        </div>

      </main>
    </div>
  );
}

export default Login;