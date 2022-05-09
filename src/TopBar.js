export default function TopBar(){
    return (
    <header>
        <div class="topo"> 
            <div class="conteudo-topo">
                <div>  <ion-icon class="icon insta" name="logo-instagram"></ion-icon>
                    <div class="barra-vertical nomobile"></div>
                    <img class="logo nomobile" src="images/logo-instagram.png" alt=""/> 
                </div>
                <img src="images/logo-instagram.png" alt="" class="logo mobile"/>
                <input class="nomobile" type="text" placeholder="Pesquisar "/>
                <div class="icons">
                    <ion-icon class="icon" name="paper-plane-outline"></ion-icon>
                    <ion-icon class="icon nomobile compass" name="compass-outline"></ion-icon>
                    <ion-icon class="icon nomobile" name="heart-outline"></ion-icon>
                    <ion-icon class="icon nomobile" name="person-outline"></ion-icon>            
                </div>
            </div>
        </div> 
    </header>   
    )
}