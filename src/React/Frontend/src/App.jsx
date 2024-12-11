// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './assets/Components/Navbar';
import Login from './Paginas/Login';
import Inicio from './Paginas/Inicio';
import Cadastro from './Paginas/Cadasto';
import Carrinho from './Paginas/Carrinho';
import CadastroCurso from './Paginas/CadastroCurso';
import BibliotecaDeCursos from './Paginas/Biblioteca';
import TelaDePagamento from './Paginas/Pagamento';
import DescricaoCurso from './Paginas/DescricaoCurso';
import MeusCursos from './Paginas/MeusCursos'


function App() {
  return (
    <Router>
      <div className="App">

        <Navbar />

        <Routes>
          {/* Defina a rota padrão (ou seja, a página inicial) */}
          <Route path="/" element={<Inicio />} /> {/* Esta é a página inicial */}
          <Route path="/inicio" element={<Inicio />} /> {/* Esta é a página inicial */}
          <Route path="/login" element={<Login />} /> {/* Página de Login */}
          <Route path="/cadastro" element={<Cadastro />} /> {/* Página de Cadastro */}
          <Route path="/carrinho" element={<Carrinho />} /> {/* Página de Carrinho */}
          <Route path="/biblioteca" element={<BibliotecaDeCursos />} /> {/*Página de Biblioteca */}
          <Route path="/pagemento" element={<TelaDePagamento />} /> {/*Página de Biblioteca */}
          <Route path="/cadastrocurso" element={<CadastroCurso />} /> {/*Página de Castro de curso */}
          <Route path="/descricao/:id" element={<DescricaoCurso />} />
          <Route path="/meusCursos" element={<MeusCursos />} />


        </Routes>
      </div>
    </Router>
  );
}

export default App;
