import './Interests.css';
import React, { cloneElement, useState } from "react"
import LogoIcon from '../../../img/Logo-icone.png'

import { Link } from 'react-router-dom'

function Interests () {

    const [classe, setClasse] = useState("I-search-txt");
    const [interesses, setInteresses] = useState([""]);

    function handleChange (valor, idx) {
        setInteresses([...interesses.map((interesse, index) => index === idx ? valor.target.value: interesse )])
    }


    function btnFunction (){
        if (classe === "I-search-txt"){
            setClasse("ativado");
        }
        else {
            setInteresses([...interesses, ""]);
        }
    }

    function deleteInteresse (idx){
            setInteresses(interesses.filter((_, index) => idx !== index));
    }
     
    function renderInput () {
        return interesses.map((interesse, idx) => (<div class="I-search-box" key={idx}>
            
            {idx !== 0 ? (<button 
                className="deleteInts"
                onClick={() => deleteInteresse(idx)}
            >
                <i className="fas fa-minus-circle"></i>
            </button>): classe === "ativado" && (<div 
                className="space-del"></div>)}

            <input className={classe} type="text" value={interesse} name="" placeholder="Interesse" onChange={valor => handleChange(valor, idx)}/>    
            
            {idx === interesses.length-1 ? 
            (<button 
                className="I-search-btn"
                onClick={btnFunction}
            >
                <i className="fas fa-plus"></i>
            </button>): (<div className="space"></div>)}

        </div>))
    }

    return (
        <div className="I-Container">
            
            <img src={LogoIcon} alt="" className="I-logo"  />

            <div className="I-informations">

                <p>Interesses pessoais</p>

                {renderInput()}                

                <Link to='/Experence' className="I-BTN"> 
                    <button>Salvar </button>
                </Link> 

            </div>

        </div>
    )
}


export default Interests 