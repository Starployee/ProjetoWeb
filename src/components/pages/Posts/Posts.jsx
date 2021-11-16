import * as React from 'react';

import escala from '../../../img/escala.png'
import post from '../../../img/post.png'
import './Posts.css'


function Post() {
    
    return(
    <div className="p-post">
                
        <div className="user-profile">{/*foto do perfil*/}
            
            <img src={escala} alt="" className="feed-img"></img>
            
            <div>
            <p>Escala 10</p>
            <span>10 de agosto de 2021, 11:15 pm</span>
            </div>

        </div>
            
            <img src={post} alt="" className="img-post"></img>{/*imagem do post*/}
            <p className="texto-post">Acerte a pontuação do Capitão para participar de um sorteio onde teremos 5 escolhidos para...</p>
            <div className="BTN-inf">
                <div className="buttons">
                <p>
                    <a href="/" class="like-btn" >
                    <i class="far fa-thumbs-up"></i>
                    </a>
                </p>
                <span> 1mil </span>
                </div>
                <div className="buttons">
                <p>
                    <a href="/" class="like-btn" >
                    <i class="far fa-comment"></i>
                    </a>
                </p>
                <span> 1mil </span>
                </div>
            </div>
        </div>
    )
}

export default Post;