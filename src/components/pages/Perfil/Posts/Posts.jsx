import React from "react"
import './SearchBox.css'
import { Link } from 'react-router-dom'

import logo from '../logo.png'
import perfil from '../../../img/perfil.png'
import investimento from '../../../img/investimento.png'
import organizacao from '../../../img/organizacao.png'

function Posts() {
    return (
        <div className="barra-ferramentas">
            <Link to="/Feed"><img src={logo} alt="" className="logo" /> </Link>    

            <div class="search-box">
                <input class="search-txt" type="text" name="" placeholder="Pesquisar"/>
                <a class="search-btn" href="/">
                    <i class="fas fa-search"></i>
                </a>
            </div>

            <Link to="/" className="Icon-link"><img src={organizacao} alt="" className="b-icon" id="orga"/> 
             
                <span class="tooltip">Organização</span>

            </Link> 

             <Link to="/" className="Icon-link"><img src={investimento} alt="" className="b-icon" id="invest"/> 

             <span class="tooltip">Investimento</span>

             </Link>

             <Link to="/Personal" className="Icon-linkPerfil"><img src={perfil} alt="" className="b-icon" id="perfil"/> 

             <span class="tooltip">Perfil</span>

             </Link>

        </div>
    )
}
export default Posts;