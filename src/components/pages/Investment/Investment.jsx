import * as React from 'react';

import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

import './Investment.css';
import { Link } from 'react-router-dom'

import escala from '../../../img/escala.png'

import SearchBox from '../../layout/SearchBox/SearchBox'

function Investment () {

    const [value, setValue] = React.useState(1000);

    const handleSliderChange = (event, newValue) => {
      setValue(newValue);
    };

    const handleInputChange = (event) => {
      setValue(event.target.value === '' ? '' : Number(event.target.value));
    };
    
    function valuetext(value) {
      return `${value}°C`;
    }

    return (
        <div className="Investment">

        <header>
          <SearchBox />
        </header>
  
        <div className="i-perfil"> 
          <div className="i-perfil-flex">
            <img src={escala} alt="" className="i-perfil-img"></img>
  
            <div className="i-perfil-info">
  
              <h1> Escala 10 </h1>
  
              <div className="i-perfil-seguidores">
              
                <p className="i-number">40</p>
                <p className="i-label">Funcionários</p>
                <p className="i-number">20.000</p>
                <p className="i-label">Seguidores</p>
  
              </div>
  
              <div className="bio">
                <p>📊 Sua melhor ferramenta de estatísticas e scouts do CartolaFC!</p>
                <p>🏆 Torne-se campeão de suas ligas com nossa ajuda!</p>
              </div>
            </div>
          </div>
            <div className="i-perfil-info2">

                <div className="i-investT"> 
                    <button className="i-invest-btn"> <i class=""></i> Proposta de Trabalho </button>
                    <div className="slider"></div>
                </div>

                <div className="i-investF">
                    <button className="i-invest-btn"> <i ></i> Proposta financeira </button>
                    <Box width={250}>

                      <Slider
                        value={typeof value === 'number' ? value : 0}
                        onChange={handleSliderChange}
                        className="slider"
                        defaultValue={1000}
                        valueLabelDisplay="auto"
                        max={1000000}
                        min={100}
                      />
                    </Box>
                    <input value={value} onChange={handleInputChange} className="input-value" placeholder="Valor de investimento"></input>
                </div>
          </div>
          
        </div>  
      </div>
    );
}
export default Investment;