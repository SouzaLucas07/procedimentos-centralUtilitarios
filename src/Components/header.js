import React from 'react';
import '../styles/header.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


function Header() {

  return (
    <header className="header">
      <h1 className="header-title"><Link to="/">Procedimentos</Link></h1>
      <nav>
        <ul>
            <li><Link to="/calculator">Calculadora</Link></li>
            <li><Link to="/searchCEP">Pesquisar CEP</Link></li>
            <li><Link to="/countClick">Contador de Click</Link></li>
            <li><Link to="/oldGame">Jogo da Velha</Link></li>
            <li><Link to="/toDoList">To Do List</Link></li>
        </ul>
      </nav>
    </header>
  );
} export default Header;