import './Outsource.css'
import { Link } from 'react-router-dom'

import escala from '../../../../img/escala.png'

import SearchBox from '../../../layout/SearchBox/SearchBox'

function Outsource() {
  return (

    <div className="Outsource">

      <header>
        <SearchBox />
      </header>

      <div className="o-perfil"> 
        <div className="o-perfil-flex">
          <img src={escala} alt="" className="o-perfil-img"></img>

          <div className="o-perfil-info">

            <h1> Escala 10 </h1>

            <div className="o-perfil-seguidores">
            
              <p className="o-number">40</p>
              <p className="o-label">Funcionários</p>
              <p className="o-number">20.000</p>
              <p className="o-label">Seguidores</p>

              <button >seguir</button>

            </div>

            <div className="bio">
              <p>📊 Sua melhor ferramenta de estatísticas e scouts do CartolaFC!</p>
              <p>🏆Torne-se campeão de suas ligas com nossa ajuda!</p>
            </div>
          </div>
        </div>
          <div className="o-perfil-info2">
            <div className="o-interesses">
              
              <p>Interesses associados</p>

              <div className="interesse-label"> 
                <i class="fas fa-futbol fa-2x"></i>
                <p>Futebol</p>
              </div>

              <div className="interesse-label"> 
                <i class="fas fa-chart-bar fa-2x"></i>
                <p>Estatística</p>
              </div>

            </div>

            <div className="invest">

              <Link to="/Investment"> <button> <i class="fas fa-chart-line"> </i> Investir</button></Link>

            </div>
          </div>
      </div>  
    </div>
  );
}
export default Outsource;
