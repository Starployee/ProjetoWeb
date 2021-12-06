import './about.css';

import edu from '../../../img/Eduardo.png'
import hen from '../../../img/hen.jpg'
import gus from '../../../img/gus.jfif'

import SearchBox from '../../layout/SearchBox/SearchBox';
import { Link } from 'react-router-dom'

function About() {
  return (
    <div className="App">
      <header>
        <SearchBox />
      </header>
      
      <div className="about-section">
        
      <Link to="/"><i className='fas fa-chevron-left' /></Link> 
        <div className="about-label">
          <h1>Sobre</h1>
          <hr></hr> 
        </div>
        
        <div className="about-text">
          <h1>Participantes</h1>
          <div className="participant">
            <img src={edu} alt="" className="a-photo"  />
              <p>Eduardo Alexandre Pozzobom (aluno) </p>
          </div>
          <div className="participant">
            <img src={gus} alt="" className="a-photo"  />
              <p>Gustavo Cabral Correia (aluno) </p>
          </div>
          <div className="participant">
            <img src={hen} alt="" className="a-photo"  />
              <p>Henrique William (aluno) </p>
          </div>
              <h1>Objetivos</h1>
            <p>
              Nosso projeto visa trazer o matching (conceito de juntar pessoas por meio de seus interesses pessoais) para o mundo de startups. Faremos isso por meio de uma rede social que permite os candidatos a participar dessas companhias a partir destes parâmetros pessoais, assim como suas experiências.
            </p>
              <h1>Funcionalidades</h1>
            <p>
              Por meio da Starployee, os usuários podem criar organizações, investir em outras companhias, ingressar no mercado e divulgar startups. Tudo isso por meio do matching, citado anteriormente.
            </p>
        </div>
      </div>

    </div>
    
  );
}
export default About;
