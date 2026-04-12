import Header from '../Components/header';
import '../styles/calculator.css';

function Display ({ value }) {
    return (
        <div className="display">
            {value}
        </div>
    )
}

function ButtonPanel ({ onButtonCLick}) {
    const buttons = [
        '7', '8', '9', '/',
        '4', '5', '6', '*',
        '1', '2', '3', '-',
        '0', '.', '=', '+'
    ];

    return (
        <div className="button-panel">  
            {buttons.map((btn) => (
                <button key={btn} onClick={() => onButtonCLick(bnt)}>
                    {btn}
                </button>
            ))}
        </div>
    )
}

function Calculator() {
    return(
        <div className="calculator">
            <Header />
            <h1>Calculadora</h1>
        </div> 
    )
} 

export default Calculator;