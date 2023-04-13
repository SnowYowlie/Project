
import { FlexContainer } from "../../components/styled/FlexContainer";
import { GridContainer } from "../../components/styled/GridContainer";
import playlistService from "../../service/playlistService";
import { useLoaderData } from "react-router-dom";
import playlist, { Items } from "../../types/playlist";
import './PlaylistPage.scss';
import PlaylistItem from "../../components/PlaylistItem/PlaylistItem";
import SvgTime from "../../iconComponents/Time";
import { useDispatch } from "react-redux";
import { selectTrack } from "../../store/slices/selectedTrackSlice";

const PlaylistPage = () => {
  const dispatch = useDispatch();
  const currentPlayList = useLoaderData() as playlist;
  let artists: Array<string>;
  let list;
  let artists_names = currentPlayList.tracks.items.map((item, index) => { 
    if (item.track === null) {
    index+=1;
    } else {
      artists = item.track.artists.map((item) => item.name)
    } return artists;
}).flat();

  let dates = currentPlayList.tracks.items.map((item) => item.added_at)
                                          .flat()
                                          .map((item) => {  let date; date = new Date (item.slice(0,10)); 
                                                            return item = date.toDateString()
                                                                              .slice(4)
                                                                     });   
  const isUndefinedImage = (item: any) => {
    if (item === undefined || item === null) {
      return item = currentPlayList.images[0].url
    } else return item.url;
  }          
  const selectTrackItem = (item: Items) => {
    dispatch(selectTrack(item))
  }                                                                                                                                                                      
  return (
    <section className="playlist_page">
      <FlexContainer direction="column" className="playlist_page__container">
        <FlexContainer gap="25px" flex_grow="1" height="100%" align="flex-end" margin="0 0 20px">
        <div className="playlist_img">
          <img src={currentPlayList.images[0].url} alt="image" className="playlist_img image"/>
        </div>
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
        <GridContainer className="info_bar">
          <span className="info_bar__number">#</span>
          <span className="info_bar__title">Title</span>
          <span className="info_bar__album">Album</span>
          <span className="info_bar__date">Date Added</span>
          <SvgTime/>
        </GridContainer> 
        <div className="playlist__tracks">
          {
            list = currentPlayList.tracks.items.map((item, index) => {
              if (item.track === null) {
              return <PlaylistItem  key = {currentPlayList.tracks.items[index+1].track.id} 
                                    number = {currentPlayList.tracks.items.indexOf(item)+1} 
                                    track_image = {isUndefinedImage(currentPlayList.tracks.items[currentPlayList.tracks.items.indexOf(item)+1].track.album.images[0])}
                                    name = {currentPlayList.tracks.items[index+1].track.name}
                                    album = {currentPlayList.tracks.items[index+1].track.album.name}
                                    artist = {artists_names[currentPlayList.tracks.items.indexOf(item)]}
                                    date = {dates[currentPlayList.tracks.items.indexOf(item)].slice(0,6)}
                                    year = {dates[currentPlayList.tracks.items.indexOf(item)].slice(6)}
                                    selectTrack = {() => selectTrackItem(item)}/>
                                    }        
              else {
                return <PlaylistItem  key = {item.track.id} 
                                      number = {currentPlayList.tracks.items.indexOf(item)+1} 
                                      track_image = {isUndefinedImage(currentPlayList.tracks.items[currentPlayList.tracks.items.indexOf(item)].track.album.images[0])}
                                      name = {item.track.name}
                                      album = {item.track.album.name}
                                      artist = {artists_names[currentPlayList.tracks.items.indexOf(item)]}
                                      date = {dates[currentPlayList.tracks.items.indexOf(item)].slice(0,6)}
                                      year = {dates[currentPlayList.tracks.items.indexOf(item)].slice(6)}
                                      selectTrack = {() => selectTrackItem(item)}/>
              }
            })
          }
        </div>
      </FlexContainer> 
    </section>
  )
}

export default PlaylistPage;

export const playListLoader = async ({params}: any) => {
  let response = await playlistService.getById(params.id)
  return (
    response
  )
}


// Общая продолжительность плейлиста
// const trackDurations = currentPlayList.tracks.items.map((item) => item.track.duration_ms);
  // let duration_hs = Math.floor(trackDurations.reduce((currentValue, nextValue) => {return (currentValue + nextValue)}));
  // console.log(currentPlayList)
  // let duration_mins = Math.floor(trackDurations.reduce((currentValue, nextValue) => {return (currentValue + nextValue)})/1000/60/60-60);
  // if (duration_mins < 0) {
  //   duration_mins = duration_mins*(-1)
  // }


  // Проверка на track= null
  // else if (currentPlayList.tracks.items[index-1].track === null) {
              //   return <PlaylistItem  key = {currentPlayList.tracks.items[index+2].track.id} 
              //                       number = {currentPlayList.tracks.items.indexOf(item)+2} 
              //                       track_image = {isUndefinedImage(currentPlayList.tracks.items[currentPlayList.tracks.items.indexOf(item)+2].track.album.images[0])}
              //                       name = {currentPlayList.tracks.items[index+2].track.name}
              //                       album = {currentPlayList.tracks.items[index+2].track.album.name}
              //                       artist = {artists_names[currentPlayList.tracks.items.indexOf(item)]}
              //                       date = {dates[currentPlayList.tracks.items.indexOf(item)].slice(0,6)}
              //                       year = {dates[currentPlayList.tracks.items.indexOf(item)].slice(6)}
              //                       />
              // } 