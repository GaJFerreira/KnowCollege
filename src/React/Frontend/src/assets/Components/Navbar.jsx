import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import CarrinhoIcon from '../Arquivos/carrinho.png';
import CursosIcon from '../Arquivos/Cursos.png';
import logo from '../Arquivos/logo2.png';
import LogoutIcon from '../Arquivos/Logout.png';

const Navbar = () => {
  const navigate = useNavigate();
  const [usuarioId, setUsuarioId] = useState(null); // Estado para armazenar o ID do usuário

  useEffect(() => {
    // Verifique se há um ID de usuário armazenado no localStorage
    const storedUsuarioId = localStorage.getItem('usuarioLogado');
    if (storedUsuarioId) {
      setUsuarioId(storedUsuarioId); // Atualiza o estado com o ID do usuário
    }
  }, []);

  const irParaCadastro = () => {
    navigate('/cadastro');
  };

  const irParaLogin = () => {
    navigate('/login');
  };

  const irParaCadastroCurso = () => {
    navigate('/cadastrocurso');
  };

  const irParaCarrinho = () => {
    navigate('/carrinho');
  };

  const logout = () => {
    // Limpar o localStorage e o estado do usuário
    localStorage.removeItem('usuarioLogado');
    setUsuarioId(null);
    navigate('/login'); // Redireciona para a página de login
  };

  return (
    <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/inicio">
          <img src={logo} alt="Logo não carregou" style={{ width: '50px' }} />
          <span className="brand-text" style={{ color: 'rgb(51, 207, 247)' }}>KnowCollege</span>
        </a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <button className="nav-link active" onClick={() => navigate('/inicio')}>Inicio</button>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/biblioteca">Cursos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Info</a>
            </li>
          </ul>

          <form className="d-flex" onSubmit={(e) => e.preventDefault()}>
            {/* Botões para usuários não logados */}
            {!usuarioId ? (
              <>
                <button id="botaoCadastro" className="btn btn-info me-2" type="button" onClick={irParaCadastro}>Cadastrar</button>
                <button id="botaoLogin" className="btn btn-info me-2" type="button" onClick={irParaLogin}>Fazer login</button>
              </>
            ) : (
              // Botões para usuários logados
              <>
                <button id="botaoCadastroCurso" className="btn btn-info me-2" onClick={irParaCadastroCurso}>
                  <img src={CursosIcon} alt="Ícone de Cadastro" style={{ width: '20px', height: '20px', verticalAlign: 'middle', marginRight: '8px' }} />
                  Adicionar Cursos
                </button>
                <button id="botaoCarrinho" className="btn btn-info me-2" onClick={irParaCarrinho}>
                  <img src={CarrinhoIcon} alt="Ícone de Carrinho" style={{ width: '24px', height: '24px', verticalAlign: 'middle', marginRight: '8px' }} />
                  Meu Carrinho
                </button>
                <button id="botaoLogout" className="btn btn-info me-2" onClick={logout}>
                  <img src={LogoutIcon} alt="Ícone de Logout" style={{ width: '24px', height: '24px', verticalAlign: 'middle', marginRight: '8px' }} />
                  Sair
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
