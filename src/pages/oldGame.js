import React, { useState } from 'react';
import '../styles/oldGame.css';

function OldGame() {
  const [tabuleiro, setTabuleiro] = useState(Array(9).fill(null));
  const [jogadorAtual, setJogadorAtual] = useState('X');
  const [vencedor, setVencedor] = useState(null);
  const [empate, setEmpate] = useState(false);

  const verificarVencedor = (quadrados) => {
    const linhas = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // linhas
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // colunas
      [0, 4, 8], [2, 4, 6] // diagonais
    ];

    for (let linha of linhas) {
      const [a, b, c] = linha;
      if (quadrados[a] && quadrados[a] === quadrados[b] && quadrados[a] === quadrados[c]) {
        return quadrados[a];
      }
    }
    return null;
  };

  const verificarEmpate = (quadrados) => {
    return quadrados.every(quadrado => quadrado !== null) && !verificarVencedor(quadrados);
  };

  const handleClick = (index) => {
    if (vencedor || tabuleiro[index] || empate) return;

    const novoTabuleiro = [...tabuleiro];
    novoTabuleiro[index] = jogadorAtual;
    setTabuleiro(novoTabuleiro);

    const ganhador = verificarVencedor(novoTabuleiro);
    if (ganhador) {
      setVencedor(ganhador);
    } else if (verificarEmpate(novoTabuleiro)) {
      setEmpate(true);
    } else {
      setJogadorAtual(jogadorAtual === 'X' ? 'O' : 'X');
    }
  };

  const reiniciarJogo = () => {
    setTabuleiro(Array(9).fill(null));
    setJogadorAtual('X');
    setVencedor(null);
    setEmpate(false);
  };

  const renderizarQuadrado = (index) => {
    return (
      <button className="quadrado" onClick={() => handleClick(index)}>
        {tabuleiro[index]}
      </button>
    );
  };

  return (
    <div className="jogo-container">
      <h1>🎮 Jogo da Velha</h1>

      <div className="status">
        {vencedor && <p>🏆 Vencedor: {vencedor}!</p>}
        {empate && <p>🤝 Empate! Ninguém ganhou.</p>}
        {!vencedor && !empate && <p>Vez do jogador: <strong>{jogadorAtual}</strong></p>}
      </div>

      <div className="tabuleiro">
        <div className="linha">
          {renderizarQuadrado(0)}
          {renderizarQuadrado(1)}
          {renderizarQuadrado(2)}
        </div>
        <div className="linha">
          {renderizarQuadrado(3)}
          {renderizarQuadrado(4)}
          {renderizarQuadrado(5)}
        </div>
        <div className="linha">
          {renderizarQuadrado(6)}
          {renderizarQuadrado(7)}
          {renderizarQuadrado(8)}
        </div>
      </div>

      <button className="botao-reiniciar" onClick={reiniciarJogo}>
        🔄 Novo Jogo
      </button>
    </div>
  );
}

export default OldGame;