export default function Stories(){
    let stories = 
    [ 
        {userName:"9gsdaag",        image:"images/9gag.png"},
        {userName: "meowd",         image:"images/meowed.png",},
        {userName: "barked",        image:"images/barked.png",},
        {userName: "nathanwpyle...",image:"images/nathanwpylestrangeplanet.png",},
        {userName: "naturelife",    image:"images/nature56.png",},
        {userName: "respondeai",    image:"images/respondeai.png",},
        {userName: "filomoderna",   image:"images/filomoderna.png",},
        {userName: "memeriago.",    image:"images/memeriagourmet.png",},
    ]

    //Criando um array de stories JSX
    let arrayStories = stories.map(storieObject => 
            <div class="storie-background">
                <img class="foto-perfil" src={storieObject.image} alt=""/>
                <p class="nome-usuario">{storieObject.userName}</p>
            </div> 
    )
    return(
            <div class="stories-bar">
                {arrayStories}
                <img src="images/botao-storie.png" alt="" class="botao"/>
            </div>
    )
}