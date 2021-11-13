import React, { useState } from "react"
import ReactPlayer from "react-player";

import './UpPitch.css';
import BarraFerrementas from '../../layout/SearchBox/SearchBox'
import LogoIcon from '../../../img/Logo-icone.png'

import { Link } from 'react-router-dom'


function  UpPitch() {

    function getId(url) {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.match(regExp);
    
        return (match && match[2].length === 11)
          ? match[2]
          : null;
    }
        
    const [link, setLink] = useState("https://www.youtube.com/embed/JC34mC3NdHs&t=2s");

    const videoId = getId(link);

    return (
        <div className="u-Container">
            
            <div className="u-Barra_ferramentas">
                <BarraFerrementas />
            </div>

            <div className="u-info_box-container">
                <div className="u-info_box">
                    
                    <div className="u-logo_container">
                        <img src={LogoIcon} />
                    </div>
                    
                    <div className="u-inputs">
                        <div className="u-input_column">
                            <input placeholder="Link do seu pitch" onChange={valor => setLink(valor.target.value)}></input>
                        </div>
                        <div className="u-input_column">
                            <iframe width="300" height="170" src={'//www.youtube.com/embed/' + videoId + ''} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                            </iframe>
                        </div>
                    </div>

                    <Link to="/OrgInvest" className="u-btn">
                        <button> Salvar </button>
                    </Link>

                </div>
            </div>
        </div>
    )
}
export default  UpPitch