import Posts from  "./Posts"
import Stories from "./Stories"

export default function MainContent(){
    return (
            <div class="conteudo-principal">
                {/* Rendering stories in JSX */}
                <div class="section-stories">
                    <Stories />
               </div>
                {/*Rendering posts in JSX */}
                <div class="section-posts">
                    <Posts />
                </div>            
            </div>
    )
}