import React from 'react';
import '../CSS/EstiloGeral.css'; // Certifique-se de importar o CSS

function Cadastro() {
  const fazerCadastro = async (event) => {
    event.preventDefault(); // Impede o envio do formulário automaticamente

    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    if (name && email && password) {
      // Crie o objeto com os dados do cadastro
      const cadastroData = {
        nome: name,
        email: email,
        senha: password,
        tipo: "Professor",
      };

      try {
        // Enviar dados para a API
        const response = await fetch('http://localhost:8080/usuario/cadastro', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(cadastroData),
        });

        if (response.status === 201) {
          // Cadastro bem-sucedido
          alert('Cadastro bem-sucedido!');
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
          window.location.href = '/inicio'; // Ajuste para o caminho do React Router
        } else {
          alert('Erro ao cadastrar. Tente novamente!');
        }
      } catch (error) {
        console.error('Erro ao realizar cadastro:', error);
        alert('Ocorreu um erro. Tente novamente mais tarde.');
      }
    } else {
      alert('Por favor, preencha todos os campos!');
    }
  };

  const adicionarCursoAoCarrinho = (nome, descricao, preco) => {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    // Adicione o curso ao carrinho
    carrinho.push({ nome, descricao, preco });
    // Atualize o carrinho no localStorage
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
  };

  return (
    <div className="container text-light">
      <div className="col-md-6">
        <form id="cadastroForm mb-2" onSubmit={fazerCadastro}>
          <div className="form-header d-flex justify-content-between align-items-center mb-3">
            <div className="title mb-2">
              <h1>Cadastre-se</h1>
            </div>
          </div>

          <div className="input-group mb-2">
            <div className="form-group mb-2">
              <label htmlFor="name">Nome completo</label>
              <input
                id="name"
                type="text"
                className="form-control"
                name="name"
                placeholder="Digite seu nome completo"
                required
              />
            </div>

            <div className="form-group mb-2">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                className="form-control"
                name="email"
                placeholder="Digite seu email"
                required
              />
            </div>

            <div className="form-group mb-2">
              <label htmlFor="password">Senha</label>
              <input
                id="password"
                type="password"
                className="form-control"
                name="password"
                placeholder="Digite sua senha"
                required
              />
            </div>
          </div>

          <div className="Cadastrarmb-2">
            <button type="submit" className="btn btn-info">
              Cadastrar
            </button>
          </div>
        </form>
      </div>

    </div>
  );
}

export default Cadastro;
