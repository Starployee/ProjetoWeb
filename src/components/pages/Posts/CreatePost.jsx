import * as React from 'react';

import escala from '../../../img/escala.png'
import post from '../../../img/post.png'
import { Link } from 'react-router-dom'

import './CreatePost.css'

function CreatePost() {

    const refreshPage = ()=>{
        window.location.reload();
    }

    const [image, setImage] = React.useState('');  
    
    return(
    <div className="C-CreatePost">
        <div className="CreatePost"> 
            
            <p id="create"> Criar post</p>
            
            <div className="PostInf">

                <div className="ImgSection"> 

                    <input id="PostIn" type="file" name="image" onChange={e => setImage(e.target.files[0])} />

                    {image ? <img src={URL.createObjectURL(image)} className="PostImg"/> : 
                    (<label for="PostIn" className="UpBtn" >Selecione um arquivo</label>)}

                </div>

                <div className="PostSubtitle">
                    <div className="UserInf">
                        <img src={escala} alt="" className="User-img"></img>
                        <p>Escala 10</p>
                    </div>
                    <textarea className="post_text_area" placeholder="Escreva aqui sua legenda"></textarea> 
                    
                    <div className="PostAddBtn"> 
                        <button onClick={refreshPage}>Adicionar </button> 
                    </div> 
                </div>

            </div>

        </div>
    </div>
    )
}

export default CreatePost;