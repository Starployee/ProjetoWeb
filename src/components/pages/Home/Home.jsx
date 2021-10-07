import './Home.css';
import { Link } from 'react-router-dom'

import logo from '../../../img/logo.png'

function Home () {
    return (
        <div className="Container">
            <div className="Logo">
                <img src={logo} alt="" className="p-photo"  />
            </div>
            
            <div className="i-container">
                
                <div className="Informacoes">
                    
                    <label>Uma nova forma de enxergar o mundo empresarial</label>
                    
                    <div className="espace"></div>

                    <div className="BTNS">
                        <Link to="/Login"><button>Login</button></Link>
                        <div className="espace"></div>
                        <Link to="/SignUp"><button>Cadastrar-se</button></Link>
                    </div>

                </div>
            
            </div>

        </div>
    )
}
export default Home 