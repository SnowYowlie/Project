import playlistItem from "./playlisItem"

type playlist = {
    href: string,
    limit: number,
    next: string,
    offset: number,
    previous: string,
    total: number,
    items: Array<playlistItem>,
}

export default playlist;