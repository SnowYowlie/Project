import { FlexContainer } from "../styled/FlexContainer";
import "./NavBar.scss";
import SvgHome from "../../iconComponents/Home";
import SvgLibrary from "../../iconComponents/Library";
import SvgSearch from "../../iconComponents/Search";
import LinkItem from "../base/LinkItem";
import UsersPlayLists from "../UsersPlaylists/UsersPlaylists";

const NavBar = () => {
    return (
        <FlexContainer direction="column" className="navigation-bar" flexBasis="15%" height="90vh" padding="15px">
            <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png" alt="Logo" />
            <div className="navigation-bar__main">
                <FlexContainer height="25px" align="center" margin="0 0 10px" gap="10px">
                    <SvgHome/>
                    <LinkItem url="/"> 
                        Home 
                    </LinkItem>
                </FlexContainer>
                <FlexContainer height="25px" align="center" margin="0 0 10px" gap="10px">
                    <SvgSearch/>
                    <LinkItem url="/Search"> 
                        Search 
                    </LinkItem>
                </FlexContainer>
                <FlexContainer height="25px" align="center" margin="0 0 10px" gap="10px">
                    <SvgLibrary/>
                    <LinkItem url="/Library"> 
                        Library 
                    </LinkItem>
                </FlexContainer>
            </div>
            <UsersPlayLists/>
        </FlexContainer>
    )
}

export default NavBar;

