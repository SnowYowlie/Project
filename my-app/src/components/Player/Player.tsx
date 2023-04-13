import { useSelector } from "react-redux";
import SpotifyPlayer from 'react-spotify-web-playback';
import { RootState } from "../../store/store";


const Player = ({token}:any) => {
    const selectedTrack = useSelector((state: RootState) => state.selectedTrack.track)
    console.log(selectedTrack?.track.uri)
    return (
        <SpotifyPlayer token={token} 
                       uris={selectedTrack?.track.uri ? [selectedTrack?.track.uri] : []}
                       showSaveIcon/>
    )
}

export default Player;