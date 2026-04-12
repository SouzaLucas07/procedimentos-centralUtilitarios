import '../styles/countClick.css';
import { useState } from 'react'

function Display ({ value }) {
    return (
        <div className="display">
            {value}
        </div>
    )
}

function AumentarContador({ aoAumentar }){
    return(
        <div className="aumentar">
            <button onClick={aoAumentar}>
                Aumentar contador
            </button>
        </div>
    )
}

function DiminuirContador({ aoDiminuir }){
    return(
        <div className="diminuir">
            <button onClick={aoDiminuir}>
                Diminuir Contador
            </button>
        </div>
    )
}

function LimparContador({ aoLimpar }){
    return(
        <div className="diminuir">
            <button onClick={aoLimpar}>
                Zerar Contador
            </button>
        </div>
    )
}

function CountClick() {
    const [input, setInput] = useState(0);
    const aoAumentar = () => { setInput(input + 1); };
    const aoDiminuir = () => { 
        if(input == 0){
            setInput('Erro!!!');
        } else {
            setInput(input - 1); 
        }
    };
    const aoLimpar = () => { setInput(0); };

    return(
        <div className="contador">
            <Display value={input} />
            <AumentarContador aoAumentar={ aoAumentar } />
            <DiminuirContador aoDiminuir={ aoDiminuir } />
            <LimparContador aoLimpar={ aoLimpar } />
        </div>
    )

} export default CountClick;