import Header from '../Components/header';
import { useState } from 'react'
import '../styles/calculator.css';

function Display ({ value }) {
    return (
        <div className="display">
            {value}
        </div>
    )
}

function ClearDisplay ({ aoLimpar }) {
    return (
        <div className="displayClear">
            <button onClick={aoLimpar}>
                Limpar Display
            </button>
        </div>
    )
}

function ButtonPanel ({ onButtonClick}) {
    const buttons = [
        '7', '8', '9', '/',
        '4', '5', '6', '*',
        '1', '2', '3', '-',
        '0', '.', '=', '+'
    ];

    return (
        <div className="button-panel">  
            {buttons.map((btn) => (
                <button key={btn} onClick={() => onButtonClick(btn)}>
                    {btn}
                </button>
            ))}
        </div>
    )
}

function Calculator() {
    const [input, setInput] = useState ('');
    const limpar = () => { setInput(''); };

    const handleButtonClick = ( value ) => {
        if( value == '=' ){
            try{
                const result = eval(input);
                setInput ( eval(input .toString()));
            } catch (error) {
                setInput('Erro!!');
            }
        } else {
            setInput((prev) => input + value);
        }
    }

    return(
        <div className="calculator">
            <Display value={input} />
            <ButtonPanel onButtonClick={handleButtonClick} />
            <ClearDisplay aoLimpar={limpar}/>
        </div> 
    )
} 

export default Calculator;