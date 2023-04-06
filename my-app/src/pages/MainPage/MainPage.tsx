import Playlist from "../../components/Playlist/Playlist";
import NavBar from "../../components/NavBar/NavBar";
import MainTab from "../../components/MainTab/MainTab";
import { FlexContainer } from "../../components/styled/FlexContainer";


const MainPage = () => {
    return (
        <FlexContainer direction="column">
            <FlexContainer>
                <NavBar/>
                <MainTab/>
            </FlexContainer>
            <Playlist/>
        </FlexContainer>
    )
}
export default MainPage;