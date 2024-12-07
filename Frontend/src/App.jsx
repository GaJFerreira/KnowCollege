// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './assets/Components/Navbar';
import Login from './Paginas/Login';
import Inicio from './Paginas/Inicio';


function App() {
  return (
<Router>
      <div className="App">
       
       <Navbar/>

        <Routes>
          {/* Defina a rota padrão (ou seja, a página inicial) */}
          <Route path="/inicio" element={<Inicio />} /> {/* Esta é a página inicial */}
          <Route path="/login" element={<Login />} /> {/* Página de Login */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
