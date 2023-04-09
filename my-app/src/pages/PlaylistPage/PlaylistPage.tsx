
import { FlexContainer } from "../../components/styled/FlexContainer";
import playlistService from "../../service/playlistService";

const PlaylistPage = () => {
  return (
    <FlexContainer>
      Hi
    </FlexContainer>
  )
}

export default PlaylistPage;

export const playListLoader = async ({params}: any) => {
  let response = await playlistService.getById(params.id)
  return ({
    currentPlayList: response
  })
}