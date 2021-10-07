import './Login.css';
import LogoText from '../../../img/Logo-texto.png'
import LogoIcon from '../../../img/Logo-icone.png'

import { Link } from 'react-router-dom'

function Login () {
    return (
        <div className="l-Container">
            
            <img src={LogoText} alt="" className="l-photo"  />

            <div className="l-i-container">
                <div className="l-Informacoes">

                    <img src={LogoIcon} alt="" className="LogoIcon" />

                    <div className="l-inputs">
                            <input placeholder="E-mail" type="email"></input>
                            <input placeholder="Senha" type="password"></input>
                    </div>

                    <Link to="/Feed" className="l-BTN-C"> 
                        <button>Login</button>
                    </Link> 
                </div>
            </div>
        </div>
    )
}
export default Login 