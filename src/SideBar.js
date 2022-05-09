function Perfil(props){
    return (
        <div class="perfil">
                    <img class="foto-perfil" src={props.image} alt=""/>
                    <div class="name-surname"> 
                    <p><strong>{props.name}</strong> </p>
                    <p class="surname">{props.surname}</p>
            </div>  
        </div>
    )
}

function Sugestoes(){
    let sugestao = [
        {ImageProfile:"images/badvibesmemes 1.png", userName:"bad.vibes.memes"},
        {ImageProfile:"images/razoesparaacreditar 1.png", userName:"razoesparaacreditar"},
        {ImageProfile:"images/adorableanimals 1.png", userName:"adorable_animals"},
        {ImageProfile:"images/smallcutecats 1.png", userName:"smallcutecats"},
        {ImageProfile:"images/chibirdart 1.png", userName:"chibirdart"} 
    ]

    let sugestoes = sugestao.map(objectSugestao =>   
        <div class="sugestao"> 
            <div class="info-usuario">
                <img src={objectSugestao.ImageProfile} alt="" class="foto-perfil"/>
                <div class="nome">
                <p class="nome-usuario">{objectSugestao.userName}</p>
                <p id="follow-you">Segue você</p>  
                </div>    
            </div>
        <p class="seguir">Seguir</p>                
    </div>)

    return sugestoes
}


export default function SideBar(){
    return (
        <div class="side-bar">
            <div class="div-fixed">
                <Perfil image="images/catanacomics.png" name="Samer" surname="valente"/>
                <div class="sugestoes">
                    <div class="sugestao"> 
                        <h6>Sugestões para você</h6>
                        <p id="vertudo">Ver Tudo</p> 
                    </div>
                    <Sugestoes />
                    <div class="footer"> 
                        <p>Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade •
                            Termos • Localizações • Contas mais relevantes • Hashtags • 
                            Idioma</p>
                        <p>&copy; 2021 INSTAGRAM DO FACEBOOK</p>
                    </div> 
                </div>           
         </div>
        </div>

    )

}