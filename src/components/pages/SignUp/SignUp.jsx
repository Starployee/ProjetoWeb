import './SignUp.css';
import LogoText from '../../../img/Logo-texto.png'
import LogoIcon from '../../../img/Logo-icone.png'

import { Link } from 'react-router-dom'

function SingUp () {
    return (
        <div className="S-Container">
            
            <div className="S-logo">
                <img src={LogoText} alt="" className="s-photo"  />
            </div>

            <div className="S-i-container">
                <div className="S-Informacoes">
                    <div className="S-icon"> 
                        <img src={LogoIcon} alt="" className="LogoIcon"  />
                    </div>

                    <div className="inputs">
                        <div className="i-colunms">

                            <input placeholder="Nome completo"></input>
                            <input placeholder="Data de nascimento" ></input>
                            <input placeholder="E-mail" type="email"></input>

                        </div>    
                        <div className="i-colunms">
                            <input placeholder="Telefone" type="tel"></input>
                            <input placeholder="Senha" type="password"></input>
                            <input placeholder="CPF"></input>
                        </div>
                    </div>

                    <Link to='/Interests' className="BTN-C"> 
                        <button>Cadastrar-se</button>
                    </Link> 
                </div>
            </div>
        </div>
    )
}
export default SingUp 