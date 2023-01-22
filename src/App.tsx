import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ListaProjeto from './componentes/projeto/listaProjeto/ListaProjeto';
import DeletarProjeto from './componentes/projeto/deletarprojeto/DeletarProjeto';

import CadastroProjeto from './componentes/projeto/cadastraprojeto/CadastrarProjeto';

function App() {
  return (
    <Router>
      <Routes>
      < Route path ="/listaProjeto" element ={<ListaProjeto/>} />
      <Route path ="/deletarProjeto" element ={<DeletarProjeto/>} />
      <Route path ="/cadastroProjeto" element ={<CadastroProjeto/>}/>
      



      </Routes>
   
   
   </Router>
  )
}

export default App;
