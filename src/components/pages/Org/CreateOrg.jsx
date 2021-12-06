import React from "react";
import './CreateOrg.css';
import BarraFerrementas from '../../layout/SearchBox/SearchBox'
import UpImg from '../../../img/UpImg.png'

import { Link } from 'react-router-dom'

function  CreateOrg() {

  const [image, setImage] = React.useState('');  

    return (
        <div className="c-Container">
            
            <div className="c-Barra_ferramentas">
                <BarraFerrementas />
            </div>

            <div className="c-info_box-container">
                <div className="c-info_box">
                    
                    
                    <div className="c-logo_container">

                        <input id="imgUp" type="file" name="image" onChange={e => setImage(e.target.files[0])} /><br /><br />
                        
                        <label for="imgUp"  id="load-file" type="file">

                            {image ? <img src={URL.createObjectURL(image)} className="ImgOrg"/> : <img src={UpImg} className="ImgOrg"/>}
                            <p className="UpLabel">
                                Carregar uma foto
                                <hr className="linha"/>
                            </p>
                        </label>

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