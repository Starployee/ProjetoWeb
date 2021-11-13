import * as React from 'react';

import './InvestimentList.css';
import { Link } from 'react-router-dom'

import escala from '../../../img/escala.png'
import deuloop from '../../../img/deuloop.png'

import SearchBox from '../../layout/SearchBox/SearchBox'

function InvestmentList () {

    return (
        <div className="InvestmentList">

            <header>
                <SearchBox />
            </header>

            <div className="IL-inf">
                
                <div className="IL-org-0">
                    
                    <div className="IL-perfil">
                        <img src={escala} />
                        <p>Escala 10</p>
                    </div>
                    
                    <Link to="/Investment"> <button> <i class="fas fa-chart-line"> </i> Investir</button></Link>
                
                </div>

                <div className="IL-org-1">
                    <div className="IL-perfil">
                            <img src={deuloop} />
                            <p>DeuLoop</p>
                        </div>
                        
                        <button> <i class="fas fa-chart-line"> </i> Investir</button>
                    
                </div>
            </div>
        </div>
    );
}
export default InvestmentList;