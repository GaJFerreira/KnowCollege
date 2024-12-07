import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../CSS/EstiloGeral.css'; // Certifique-se de importar o CSS

function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const navigate = useNavigate();

  const fazerLogin = (event) => {
    event.preventDefault(); // Impede o envio do formulário automaticamente

    // Simulação de validação de login
    if (email === 'teste@1.com' && senha === '123') {
      // Armazenar o estado de login no localStorage
      localStorage.setItem('usuarioLogado', true);
    
      // Verifique se há um curso pendente para adicionar ao carrinho
      const cursoPendente = localStorage.getItem('cursoPendente');
      if (cursoPendente) {
        const curso = JSON.parse(cursoPendente);
        adicionarCursoAoCarrinho(curso.nome, curso.descricao, curso.preco);

        // Limpe o curso pendente após adicioná-lo ao carrinho
        localStorage.removeItem('cursoPendente');
      }

      // Redirecionar para a tela inicial
      navigate('/tela-inicial');
    } else {
      setErro('Usuário ou senha inválidos!');
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
    navigate('/tela-cadastro');
  };

  return (
    <div>

      <main className="m-3 d-flex justify-content-center flex-column text-light">
        <div className="w-90 shadow-lg p-3 justify-content-center d-flex">
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
        </div>

        <button className="btn btn-link mt-3" onClick={handleCadastro}>
          Cadastrar-se
        </button>
      </main>
    </div>
  );
}

export default Login;
