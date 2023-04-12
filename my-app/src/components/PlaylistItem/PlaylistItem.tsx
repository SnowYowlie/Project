import { FlexContainer } from "../styled/FlexContainer";

type PlaylistItemType = {
    name: string,
    number: number,
    artist: string
}

const PlaylistItem = ({name, number, artist}:PlaylistItemType) => {
    return(
        <FlexContainer align="center" gap="20px">
            <h2>
                {number}
            </h2>
            <div>
                <h2>
                    {name}
                </h2>
                <h2>
                    {artist}
                </h2>
            </div>
        </FlexContainer>
    )
}

export default PlaylistItem;