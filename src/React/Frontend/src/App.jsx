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

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/carrinho" element={<Carrinho />} />
          <Route path="/biblioteca" element={<BibliotecaDeCursos />} />
          <Route path="/pagemento" element={<TelaDePagamento />} />
          <Route path="/cadastrocurso" element={<CadastroCurso />} />
          <Route path="/descricao/:id" element={<DescricaoCurso />} /> {/* Rota corrigida */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
