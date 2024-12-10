import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


import logo from '../Arquivos/logo2.png';
import CursosIcon from '../Arquivos/Cursos.png';
import CarrinhoIcon from '../Arquivos/carrinho.png';
import LogoutIcon from '../Arquivos/Logout.png';

const Navbar = () => {
  const navigate = useNavigate();

  const [usuarioLogado, setUsuarioLogado] = useState(false);

  useEffect(() => {
    const statusLogin = localStorage.getItem('usuarioLogado');
    setUsuarioLogado(statusLogin === 'true');
  }, []);

  const irParaCadastro = () => navigate('/cadastro');
  const irParaLogin = () => navigate('/login');
  const irParaCadastrocurso = () => navigate('/cadastrocurso');
  const irParaCarrinho = () => navigate('/carrinho');

  const logout = () => {
    localStorage.removeItem('usuarioLogado');
    setUsuarioLogado(false);
    navigate('/login');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        {/* Logo */}
        <a className="navbar-brand" href="/inicio">
          <img src={logo} alt="Logo" style={{ width: '50px' }} />
          <span className="ms-2" style={{ color: '#33cff7' }}>KnowCollege</span>
        </a>

        {/* Botão de colapso para dispositivos menores */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Conteúdo da navbar */}
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="/inicio">Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/biblioteca">Cursos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Info</a>
            </li>
          </ul>



          {/* Botões da navbar */}
          <div className="d-flex">
            {!usuarioLogado ? (
              <>
                <button className="btn btn-info me-2" onClick={irParaCadastro}>
                  Cadastrar
                </button>
                <button className="btn btn-info me-2" onClick={irParaLogin}>
                  Fazer login
                </button>
              </>
            ) : (

              <>
                <button className="btn btn-info me-2" onClick={irParaCadastrocurso}>
                  <img
                    src={CursosIcon}
                    alt="Ícone de Cadastro"
                    style={{ width: '20px', height: '20px', verticalAlign: 'middle', marginRight: '8px' }}
                  />
                  Adicionar Cursos
                </button>
                <button className="btn btn-info me-2" onClick={irParaCarrinho}>
                  <img
                    src={CarrinhoIcon}
                    alt="Ícone de Carrinho"
                    style={{ width: '20px', height: '20px', verticalAlign: 'middle', marginRight: '8px' }}
                  />
                  Meu Carrinho
                </button>
                <button className="btn btn-info me-2" onClick={logout}>
                  <img
                    src={LogoutIcon}
                    alt="Ícone de Logout"
                    style={{ width: '20px', height: '20px', verticalAlign: 'middle', marginRight: '8px' }}
                  />
                  Sair
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
