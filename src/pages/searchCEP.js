import {useState} from 'react'
import '../styles/searchCEP.css';

function SearchCEP() {
    const [cep, setCep] = useState('');
    const [endereco, setEndereco] = useState(null);

    const buscarCep = async () => {
    try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();
        if (data.erro) {
            alert('CEP não encontrado');
            setEndereco(null);
        } else {
            setEndereco(data);
        }
        } catch (error) {
        console.error('Erro ao buscar CEP:', error);
        }
    };

    return (
        <div className="search-container">
            <h2>Localizador de Endereços</h2>
            <div className="search-box">
                <input
                    type="text"
                    placeholder="Digite o CEP (ex: 00010100)"
                    value={cep}
                    onChange={(e) => setCep(e.target.value)}
                    maxLength={8}
                />
                <button onClick={buscarCep}>Buscar</button>
            </div>

            {endereco && (
                <div className="result-panel">
                    <p>Rua: {endereco.logradouro}</p>
                    <p>Bairro: {endereco.bairro}</p>
                    <p>Cidade: {endereco.localidade} - {endereco.uf}</p>
                </div>
            )} 
        </div>
    );
} export default SearchCEP;