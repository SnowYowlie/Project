
import { FlexContainer } from "../../components/styled/FlexContainer";
import playlistService from "../../service/playlistService";
import { defer, useLoaderData } from "react-router-dom";
import playlist from "../../types/playlist";
import './PlaylistPage.scss';
import PlaylistItem from "../../components/PlaylistItem/PlaylistItem";

const PlaylistPage = () => {
  const currentPlayList = useLoaderData() as playlist;
  let artists,
      list,
      track_number = 0;
  let artists_names = currentPlayList.tracks.items.map((item) => artists = item.track.artists.map((item) => item.name)).flat();
  console.log(currentPlayList.tracks.items)
  // const trackDurations = currentPlayList.tracks.items.map((item) => item.track.duration_ms);
  // let duration_hs = Math.floor(trackDurations.reduce((currentValue, nextValue) => {return (currentValue + nextValue)}));
  // console.log(currentPlayList)
  // let duration_mins = Math.floor(trackDurations.reduce((currentValue, nextValue) => {return (currentValue + nextValue)})/1000/60/60-60);
  // if (duration_mins < 0) {
  //   duration_mins = duration_mins*(-1)
  // }
  return (
    <section className="playlist__page">
      <FlexContainer direction="column" className="playlist__page-container">
        <FlexContainer gap="25px" flex_grow="1" height="100%" align="flex-end" margin="0 0 20px">
        <img src={currentPlayList.images[0].url} alt="image" />
        <div>
          <h4>
            {currentPlayList.type}
          </h4>
          <h1>
            {currentPlayList.name}
          </h1>
          <h4>
            {currentPlayList.description}
          </h4>
          <FlexContainer margin="20px 0 0">
            <span>
              {currentPlayList.owner.display_name}
            </span>
            <span className="playlist__item">
              {currentPlayList.followers.total} likes
            </span>
            <span className="playlist__item">
              {currentPlayList.tracks.total} songs
            </span>
          </FlexContainer>
        </div>
        </FlexContainer>
        <div className="playlist__tracks">
          {
            list = currentPlayList.tracks.items.map((item) => <PlaylistItem key = {item.track.id} 
                                                                            number = {currentPlayList.tracks.items.indexOf(item)+1} 
                                                                            name = {item.track.name}
                                                                            artist = {artists_names[currentPlayList.tracks.items.indexOf(item)]}
                                                                            />)
          }
        </div>
      </FlexContainer> 
    </section>
  )
}

export default PlaylistPage;

export const playListLoader = async ({params}: any) => {
  let response = await playlistService.getById(params.id)
  return defer(
    response
  )
}