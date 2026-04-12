import { Link } from 'react-router-dom';
import './styles/App.css';
import Header from './Components/header';

const cards = [
  {
    title: "Calculadora",
    desc: "Realize cálculos matemáticos de forma rápida e precisa. Esta ferramenta foi desenvolvida para facilitar operações do dia a dia com uma interface intuitiva e resposta imediata.",
    link: "./pages/calculator"
  },
  {
    title: "Localizador de Endereços",
    desc: "Localize endereços em todo o território nacional. Basta inserir o número do CEP para obter informações detalhadas sobre rua, bairro, cidade e estado de forma automatizada.",
    link: "./pages/searchCEP"
  },
  {
    title: "Contador de Clicks",
    desc: "Uma ferramenta simples e eficiente para monitorar frequências ou quantidades. Ideal para testes de interação ou para quem precisa de um registro numérico manual rápido.",
    link: "./pages/countClick"
  },
  {
    title: "Jogo da Velha",
    desc: "Um clássico para momentos de lazer. Desafie a lógica nesta implementação digital do jogo tradicional, projetada para testar estratégias em uma interface limpa e responsiva.",
    link: "./pages/oldGame"
  },
  {
    title: "To-do List",
    desc: "Organize suas tarefas e aumente sua produtividade. Gerencie suas pendências diárias, marque objetivos concluídos e mantenha o foco no que realmente importa.",
    link: "./pages/toDoList"
  }
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <main>
        <ul>
          {cards.map((card, index) => (
            <li key={index}>
              <div className="card">
                <h1>{card.title}</h1>
                <p>{card.desc}</p>
                <Link to={card.link} className="App-link">{card.title}</Link>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
