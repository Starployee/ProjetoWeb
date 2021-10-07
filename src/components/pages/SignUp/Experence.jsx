import './Experence.css';
import React, { useState } from "react"
import LogoIcon from '../../../img/Logo-icone.png'

import { Link } from 'react-router-dom'

function Interests () { 

    const [classe, setClasse] = useState("E-search-txt");
    const [fileName, setFilename] = useState("Currículo");

    function handleChange(event) {
        setFilename(event.target.files[0].name);
    }

    function a () {
        if (classe === "E-search-txt"){
            setClasse("ativado");
        }
    }

    return (
        <div className="I-Container">
            
            <img src={LogoIcon} alt="" className="I-logo"  />

            <div className="E-informations">

                <p>Experiências profissionais</p>

                <input className="E-input" placeholder="Área de atuação" /> 
                
                <div className="E-search-box">
                    <input id="selecao-arquivo" type="file" onChange={handleChange} /> 
                    <label for="selecao-arquivo" className={classe} id="load-file" type="file">
                        {fileName}
                    </label>

                    <button 
                        className="E-search-btn"
                        onClick={a}
                    >
                        <i class="fas fa-plus"></i>
                    </button>
                </div>

                <Link to='/Feed' className="E-BTN"> 
                    <button>Salvar </button>
                </Link> 

            </div>

        </div>
    )
}

/*var $input    = document.getElementById('input-file'),
    $fileName = document.getElementById('file-name');

$input.addEventListener('change', function(){
  $fileName.textContent = this.value;
});*/

export default Interests 