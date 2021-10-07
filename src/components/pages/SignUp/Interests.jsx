import './Interests.css';
import React, { useState } from "react"
import LogoIcon from '../../../img/Logo-icone.png'

import { Link } from 'react-router-dom'

function Interests () {

    const [classe, setClasse] = useState("I-search-txt");

    function a () {
        if (classe === "I-search-txt"){
            setClasse("ativado");
        }
        else {
            
        }
    }

    return (
        <div className="I-Container">
            
            <img src={LogoIcon} alt="" className="I-logo"  />

            <div className="I-informations">

                <p>Interesses pessoais</p>

                <div class="I-search-box">
                    <input class={classe} type="text" name="" placeholder="Interesse"/>
                    <button 
                        className="I-search-btn"
                        onClick={a}
                    >
                        <i class="fas fa-plus"></i>
                    </button>
                </div>
                

                <Link to='/Experence' className="I-BTN"> 
                    <button>Salvar </button>
                </Link> 

            </div>

        </div>
    )
}


export default Interests 