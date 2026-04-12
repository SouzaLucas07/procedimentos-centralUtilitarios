import React from 'react';
import '../styles/header.css';
import {Link} from 'react-router-dom';

function Header() {

  return (
    <header className="header">
      <h1 class="header-title"><a href="../App.js">Procedimentos</a></h1>
        <nav>
            <ul>
                <li><Link to="../pages/calculator">Calculadora</Link></li>
                <li><Link to="../pages/searchCEP">Pesquisar CEP</Link></li>
                <li><Link to="../pages/countClick">Contador de Click</Link></li>
                <li><Link to="../pages/oldGame">Jogo da Velha</Link></li>
                <li><Link to="../pages/toDoList">To Do List</Link></li>
            </ul>
        </nav>
    </header>
  );
} export default Header;