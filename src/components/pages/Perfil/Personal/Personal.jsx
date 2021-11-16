import * as React from 'react';

import './Personal.css'
import { Link } from 'react-router-dom'
import escala from '../../../../img/escala.png'
import SearchBox from '../../../layout/SearchBox/SearchBox'
import Post from '../../Posts/Posts'
import CreatePost from '../../Posts/CreatePost'

import post from '../../../../img/post.png'

function Personal() {

    const [ i, setI] = React.useState(0);
    const [bio, setBio] = React.useState("📊 Sua melhor ferramenta de estatísticas e scouts do CartolaFC! 🏆 Torne-se campeão de suas ligas com nossa ajuda!");
    const [icone, setIcone] = React.useState(["", "Editar"])

    function inputBio () {
      if (i === 0 ){
        setIcone([``, "Salvar"]);
        setI(1);
      }
      else {
        setI(0);
        setIcone([``, "Editar"]);
      }
    }

    function handleInput (newBio){
      setBio(newBio.target.value);
    }

  return (

    <div className="Personal">

      <header>
        <SearchBox />
      </header>

      <div className="p-perfil"> 
        <div className="p-perfil-flex">
          <img src={escala} alt="" className="o-perfil-img"></img>

          <div className="p-perfil-info">

            <h1> Escala 10 </h1>

            <div className="p-perfil-seguidores">
            
              <p className="p-number">20.000</p>
              <p className="p-label">Seguidores</p>

              <button 
                  className="p-btn"
                  onClick={inputBio}
              >
                  {icone[1]}
              </button>

            </div>

            <div className="bio">
              {i === 1 ? (<input className="p-inputs" placeholder="Digite aqui sua nova bio" onChange={newBio => handleInput(newBio)}></input>): bio}
            </div>
          </div>
        </div>
          <div className="p-perfil-info2">
            <div className="p-interesses">
              
              <p>Interesses associados</p>

              <div className="interesse-label"> 
                <i class="fas fa-futbol fa-2x"></i>
                <p>Futebol</p>
              </div>

              <div className="interesse-label"> 
                <i class="fas fa-chart-bar fa-2x"></i>
                <p>Estatística</p>
              </div>

              <div className="interesse-label"> 
                <Link to="/Interests">
                  <button className="p-btn">
                    <i class="fas fa-plus-circle fa-2x"></i>Adicionar</button>
                </Link>
              </div>

            </div>

          </div>
      </div>
    
    
      <div className="post-section">
        
        <div className="posts-menu">

            <nav>
              <ul>
                <li>Posts</li>
                <li>Criar</li>
              </ul>
            </nav>

        </div>

        <Post />

      </div>
    </div>
  );
}
export default Personal;
