import './CreateOrg.css';
import BarraFerrementas from '../../layout/SearchBox/SearchBox'
import LogoIcon from '../../../img/Logo-icone.png'

import { Link } from 'react-router-dom'

function  CreateOrg() {
    return (
        <div className="c-Container">
            
            <div className="c-Barra_ferramentas">
                <BarraFerrementas />
            </div>

            <div className="c-info_box-container">
                <div className="c-info_box">
                    
                    <div className="c-logo_container">
                        <img src={LogoIcon} />
                    </div>
                    
                    <div className="c-inputs">
                        <div className="c-input_column">
                            <input placeholder="Nome do projeto"></input>
                            <input placeholder="Área de atuação"></input>
                        </div>

                        <div className="c-input_column">
                            <textarea className="text_area" placeholder="Escopo"></textarea>
                            <textarea className="text_area" placeholder="Informações"></textarea>
                        </div>
                    </div>

                    <div className="c-btn">
                        <Link to="/UpPitch">
                            <button>Próximo</button>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default  CreateOrg