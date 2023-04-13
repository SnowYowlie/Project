import { FlexContainer } from "../styled/FlexContainer";
import userTopItemsService from "../../service/userTopItemsService";
import { useLoaderData } from "react-router-dom";

const MainTab = () => {
    const data = useLoaderData();
    return (
        <FlexContainer className="main_tab">
            <div>
                {/* {data} */}
                Когда-нибудь придумаю, что сюда можно вкинуть

            </div>
        </FlexContainer>
    )
}

export const mainTabLoader = async () => {
    let response = await userTopItemsService.getTopArtists()
    return (
      response
    )
  }

export default MainTab;