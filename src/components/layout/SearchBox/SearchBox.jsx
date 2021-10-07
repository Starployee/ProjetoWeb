import React from "react"
import './SearchBox.css'
import { Link } from 'react-router-dom'

import logo from '../logo.png'
import perfil from '../../../img/perfil.png'
import investimento from '../../../img/investimento.png'
import organizacao from '../../../img/organizacao.png'

function SearchBox() {
    return (
        <div className="barra-ferramentas">
            <Link to="/"><img src={logo} alt="" className="logo" /> </Link>    

            <div class="search-box">
                <input class="search-txt" type="text" name="" placeholder="Pesquisar"/>
                <a class="search-btn" href="/">
                    <i class="fas fa-search"></i>
                </a>
            </div>

             <Link to="/"><img src={organizacao} alt="" className="b-icon"/> </Link>
             <Link to="/"><img src={investimento} alt="" className="b-icon"/> </Link>
             <Link to="/"><img src={perfil} alt="" className="b-icon"/> </Link>


        </div>
    )
}
export default SearchBox;