import Playlist from "../../components/Player/Player";
import NavBar from "../../components/NavBar/NavBar";
import "./MainPage.scss";
import playlistService from "../../service/playlistService";
import { Outlet } from "react-router-dom";
import { FlexContainer } from "../../components/styled/FlexContainer";
import Player from "../../components/Player/Player";
import Navigation from "../../components/Navigation/Navigation";

const MainPage = () => {
    let token: string | null = localStorage.getItem('authToken');
    return (
        <section className="mainPage__wrapper">
            <FlexContainer direction="column" height="100%">
                <FlexContainer  flexBasis="100%" width="100%">
                    <NavBar/>
                    <FlexContainer direction="column" flex_grow="1" height="90vh" width="80%">
                        <Navigation/>
                        <Outlet/>
                    </FlexContainer>
                </FlexContainer>
                <Player token = {token}/>
            </FlexContainer>
        </section>
    )
}

export default MainPage;

export const mainPageLoader = async () => {
    if(window.location.hash.includes('access_token')) {
      const hash: string = window.location.hash.split("&")[0].split("=")[1]
      localStorage.setItem('authToken', hash)
    }
    const result = await playlistService.getList()
    return result
  }