import React, { useState } from "react"
import ReactPlayer from "react-player";

import './OrgInvest.css';
import BarraFerrementas from '../../layout/SearchBox/SearchBox'
import LogoIcon from '../../../img/Logo-icone.png'

import { Link } from 'react-router-dom'


function  OrgInvest() {

    const [interesses, setInteresses] = useState([""]);

    function handleChange (valor, idx) {
        setInteresses([...interesses.map((interesse, index) => index === idx ? valor.target.value: interesse )])
    }

    function btnFunction (){
        setInteresses([...interesses, ""]);
    }

    function deleteInteresse (idx){
            setInteresses(interesses.filter((_, index) => idx !== index));
    }
     
    function renderInput () {
        return interesses.map((interesse, idx) => (<div class="oi-search-box" key={idx}>

            
            {idx !== 0 && (<button 
                className="oi-deleteInts"
                onClick={() => deleteInteresse(idx)}
            >
                <i className="fas fa-minus-circle"></i>
            </button>)}

            <input className="oi-ativado" type="text" value={interesse} name="" placeholder="Interesse" onChange={valor => handleChange(valor, idx)}/>    

            {idx === interesses.length-1 ? 
            (<button 
                className="oi-search-btn"
                onClick={btnFunction}
            >
                <i className="fas fa-plus"></i>
            </button>): (<div className="oi-space"></div>)}

        </div>))
    }
    return (
        <div className="oi-Container">
            
            <div className="oi-Barra_ferramentas">
                <BarraFerrementas />
            </div>

            <div className="oi-info_box-container">
                <div className="oi-info_box">
                    
                    <div className="oi-logo_container">
                        <img src={LogoIcon} />
                    </div>
                    
                    <div className="oi-inputs">
                        <div className="oi-input_column">
                            <label>Interesses associados: </label>
                            {renderInput()}   
                           
                        </div>
                        <div className="oi-input_column">
                            <label>Alcance de investimentos: </label>
                            <input id="normalInputs" placeholder="Min.:" ></input>
                            <input id="normalInputs" placeholder="Max.:"></input>
                        </div>
                    </div>

                    <div className="oi-btn">
                        <Link to="/OutSource" >
                            <button> Abrir para investimentos </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default  OrgInvest