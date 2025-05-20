// src\pages\TelaInical\index.js

import './styles.css'
import { useNavigate } from 'react-router-dom'
import logo from '../../assets/images/logo-paysandu.png'

function TelaInicial() {
    const navigate = useNavigate()

    return (
        <div className='tela-inicial'>
            <div className='container'>
                <img src={logo} alt="Logo do Paysandu" />
                <h2>paysandu SC</h2>
                <button onClick={() => navigate('/cadastro')} className='link-registrar'>
                    Cadastrar Jogador
                </button>
                <button onClick={() => navigate('/usuarios')} className='link-registrar'>
                    Lista de Jogadores
                </button>
            </div>
        </div>
    )
}

export default TelaInicial