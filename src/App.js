import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Calculator from './pages/calculator';
import SearchCep from './pages/searchCEP'
import CounterClicks from './pages/countClick'
import OldGame from './pages/oldGame'
import ToDoList from './pages/toDoList'
import './styles/App.css';
import Header from './Components/header';

const cards = [
  {
    title: "Calculadora",
    desc: "Realize cálculos matemáticos de forma rápida e precisa. Esta ferramenta foi desenvolvida para facilitar operações do dia a dia com uma interface intuitiva e resposta imediata.",
    link: "/calculator"
  },
  {
    title: "Localizador de Endereços",
    desc: "Localize endereços em todo o território nacional. Basta inserir o número do CEP para obter informações detalhadas sobre rua, bairro, cidade e estado de forma automatizada.",
    link: "/searchCEP"
  },
  {
    title: "Contador de Clicks",
    desc: "Uma ferramenta simples e eficiente para monitorar frequências ou quantidades. Ideal para testes de interação ou para quem precisa de um registro numérico manual rápido.",
    link: "/countClick"
  },
  {
    title: "Jogo da Velha",
    desc: "Um clássico para momentos de lazer. Desafie a lógica nesta implementação digital do jogo tradicional, projetada para testar estratégias em uma interface limpa e responsiva.",
    link: "/oldGame"
  },
  {
    title: "To-do List",
    desc: "Organize suas tarefas e aumente sua produtividade. Gerencie suas pendências diárias, marque objetivos concluídos e mantenha o foco no que realmente importa.",
    link: "/toDoList"
  }
];

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={
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
            }/>

            <Route path="/calculator" element={<Calculator />} />
            <Route path="/searchCEP" element={<SearchCep />} />
            <Route path="/countClick" element={<CounterClicks />} />
            <Route path="/oldGame" element={<OldGame />} />
            <Route path="/toDoList" element={<ToDoList />} />

          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
