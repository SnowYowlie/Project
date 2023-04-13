import { FlexContainer } from "../styled/FlexContainer";
import { GridContainer } from "../styled/GridContainer";
import { Items } from '../../types/playlist';
import './playlistItem.scss';
import { DispatchProp } from "react-redux";

type PlaylistItemType = {
    name?: string,
    track_image?: string,
    number?: number,
    artist?: string
    album?: string,
    date?: string,
    year?: string,
    selectTrack: (item: any) => void,
}

const PlaylistItem = ({name, track_image, number, artist, album, date, year, selectTrack}:PlaylistItemType) => {
    return(
        <GridContainer className="playlist__track">
            <button onClick={selectTrack}>
                {number}
            </button>
            <FlexContainer gap="20px">
                <div>
                    <img src={track_image} alt="album"/>
                </div>
                <div>
                    <div>
                        {name}
                    </div>
                    <div>
                        {artist}
                    </div>
                </div>
            </FlexContainer>
            <div>
                {album}
            </div>
            <div>
                {date}, {year}
            </div>
        </GridContainer>
    )
}

export default PlaylistItem;