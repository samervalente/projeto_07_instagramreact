import React from "react";

function PostImage(props){
    const [nameClass, setNameClass] = React.useState("icon")
    const[name, setName] = React.useState("heart-outline")

    function Curtir(nameIcon){
        nameIcon = name
        if(nameIcon === "heart-outline"){
            setName("heart")
            setNameClass("icon vermelho")
        }else if(nameIcon === "heart"){
            setName("heart-outline")
            setNameClass("icon")
        }
    }

       return (
        <div class="post">
        <div class="topo-post">
            <div class="info-usuario">
                <img class="foto-perfil" src={props.imageUser} alt=""/>
                <p class="nome-usuario">{props.nameUser}</p>
            </div>
            <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
        </div>

        <img class="imagem-post" src={props.imagePost} onClick={Curtir} alt=""/>
    
        <div class="interacao">
            <div class="icones">  
                <ion-icon class={nameClass} onClick={Curtir} name={name}></ion-icon>
                <ion-icon class="icon" name="chatbubble-outline"></ion-icon>
                <ion-icon class="icon" name="paper-plane-outline"></ion-icon>
                <ion-icon class="icon mark" name="bookmark-outline"></ion-icon>
            </div>
            <div class="info-post">
                <img src={props.likedByImage} alt="" class="foto-perfil"/>
                <p>Curtido por <strong>{props.likedBy}</strong> e outras <strong>{props.numberLikes}</strong> pessoas</p>
            </div>
        </div>
        <div class="allcomments">
            <p>Ver todos os {props.numberComments} comentários</p>
            <div class="comment">
                <div class="comment-usuario">
                    <p class="nome-usuario">{props.userComment}</p>
                    <p class="user-comment"><span>{props.mentioned}</span> {props.comment}</p>
                </div>
                
                <ion-icon class="icon curtir"   name="heart-outline"></ion-icon>    
            </div>
            <div class="comment">
                <div class="comment-usuario">
                    <p class="nome-usuario">{props.userComment2}</p>
                    <p class="user-comment"><span>{props.mentioned2}</span> {props.comment2} </p>
                </div>
                <ion-icon class="icon curtir" name="heart-outline"></ion-icon>    
            </div>     
        </div>
        <div class="comentario">
            <ion-icon class="icon" name="happy-outline"></ion-icon>
            <input class="box-comentario" type="text" placeholder="Adicione um comentário..."/>
            <p>Publicar</p>
        </div>
    </div>
       )
}

function PostVideo(props){
    const [nameClass, setNameClass] = React.useState("icon")
    const [name, setName] = React.useState("heart-outline")

 function Curtir(nameIcon){
     nameIcon = name
     if(nameIcon === "heart-outline"){
         setName("heart")
         setNameClass("icon vermelho")
     }else if(nameIcon === "heart"){
         setName("heart-outline")
         setNameClass("icon")
     }
 }
    return (
        <div class="post">
        <div class="topo-post">
            <div class="info-usuario">
                <img class="foto-perfil" src={props.imageUser} alt=""/>
                <p class="nome-usuario">{props.nameUser}</p>
            </div>
            <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
        </div>

        <video autoPlay muted onClick={Curtir}>
        <source src={props.videoPostMP4}  type="video/mp4"/>
        <source src={props.videoPostOGV}  type="video/ogv"/>
        Seu navegador não suporta esse formato de vídeo.
        </video>
    
        <div class="interacao">
            <div class="icones">  
                <ion-icon class={nameClass} onClick={Curtir} name={name}></ion-icon>
                <ion-icon class="icon" name="chatbubble-outline"></ion-icon>
                <ion-icon class="icon" name="paper-plane-outline"></ion-icon>
                <ion-icon class="icon mark" name="bookmark-outline"></ion-icon>
            </div>
            <div class="info-post">
                <img src={props.likedByImage} alt="" class="foto-perfil"/>
                <p>Curtido por <strong>{props.likedBy}</strong> e outras <strong>{props.numberLikes}</strong> pessoas</p>
            </div>
        </div>
        <div class="allcomments">
            <p>Ver todos os {props.numberComments} comentários</p>
            <div class="comment">
                <div class="comment-usuario">
                    <p class="nome-usuario">{props.userComment}</p>
                    <p class="user-comment"><span>{props.mentioned}</span> {props.comment}</p>
                </div>
                
                <ion-icon class="icon curtir"   name="heart-outline"></ion-icon>    
            </div>
            <div class="comment">
                <div class="comment-usuario">
                    <p class="nome-usuario">{props.userComment2}</p>
                    <p class="user-comment"><span>{props.mentioned2}</span> {props.comment2} </p>
                </div>
                <ion-icon class="icon curtir" name="heart-outline"></ion-icon>    
            </div>     
        </div>
        <div class="comentario">
            <ion-icon class="icon" name="happy-outline"></ion-icon>
            <input class="box-comentario" type="text" placeholder="Adicione um comentário..."/>
            <p>Publicar</p>
        </div>
    </div>
    )
}

export default function Posts(){
    let postsImagesData = 
        [
            {UserPost: "meowed", imageProfile: "images/meowed.png", imagePost: "images/gato-telefone 1.png", likedBy:"respondeai", likedByImage:"images/respondeai.png", numberLikes: 101.523, numberComments: 3,
            comments:
            [
                {userComment:"samervalente", comment:"gatinho fofucho!! 😻😻", mentioned:""},
                {userComment2:"raquel_vale", comment2:"aquela olhada na foto do crush antes de dormir", mentioned:"@jen_jennifer"}
            ]  
            },
            {UserPost: "barked", imageProfile: "images/barked.png", imagePost: "images/dog.png", likedBy:"adorable_animals", likedByImage:"images/adorableanimals 1.png", numberLikes: 99.159, numberComments: 5,
            comments:
            [
                {userComment:"renan_dpires", comment:"só de boa... lindaum! 🐕 🐕", mentioned:"@rayanny_pires"},
                {userComment2:"eu_davi", comment2:"alguém me dá um? 🙏 🤩🤩", mentioned:""}
            ]  
            },   
        ]

    let postsImages = postsImagesData.map(object => <PostImage 
        nameUser={object.UserPost} imageUser={object.imageProfile} imagePost={object.imagePost}
        likedBy={object.likedBy} likedByImage={object.likedByImage} numberLikes={object.numberLikes}
        numberComments={object.numberComments} userComment={object.comments[0].userComment} comment={object.comments[0].comment} mentioned={object.comments[0].mentioned}  userComment2={object.comments[1].userComment2} comment2={object.comments[1].comment2} mentioned2={object.comments[1].mentioned
        }   
        />)
       
    let postsVideosData = 
        [
                {UserPost: "naturelife", imageProfile: "images/nature32.png", videoMP4Post: "videos/video.mp4", videoOGVPost:"videos/video.ogv", likedBy:"filomoderna", likedByImage:"images/filomoderna.png", numberLikes: 56.218, numberComments: 3,
                comments:
                [
                    {userComment:"carlos_eduardo", comment:"aqui tem coragem", mentioned:""},
                    {userComment2:"lipe_valente", comment2:"vai um salmãozinho ai? 🐟", mentioned:""}
                ]  
            },  
        ]   

        let postsVideos = postsVideosData.map(object => <PostVideo 
            nameUser={object.UserPost} imageUser={object.imageProfile} videoPostMP4={object.videoMP4Post} videoPostOGV={object.videoOGVPost} likedBy={object.likedBy} likedByImage={object.likedByImage} numberLikes={object.numberLikes} numberComments={object.numberComments} userComment={object.comments[0].userComment} comment={object.comments[0].comment} mentioned={object.comments[0].mentioned}  userComment2={object.comments[1].userComment2} comment2={object.comments[1].comment2} mentioned2={object.comments[1].mentioned
            }   
            />)

    return (
        <div>
            {postsImages}
            {postsVideos}
        </div>
    )
}