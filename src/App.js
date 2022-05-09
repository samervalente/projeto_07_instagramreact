import TopBar from "./TopBar"
import MainContent from "./MainContent"
import SideBar from "./SideBar"
import MenuMobile from "./MenuMobile"

export default function App(){
    return (
        <div class="container">
            <TopBar />
            <MainContent /> 
            <SideBar /> 
            <MenuMobile /> 
        </div>  
    )
}