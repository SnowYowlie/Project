type Images = {
    url: string,
    height: number,
    width: number,
}

type ExternalUrls = {
    spotify: string,
}

type Followers = {
    href: string,
    total: number
} 

type Owner = {
    external_urls: ExternalUrls,
    followers: Followers,
    href: string,
    id: string,
    type: string,
    uri: string,
    display_name: string
}

type Tracks = {
    href: string,
    total: number
}

type playlistItem = {
    collaborative: boolean,
    description: string,
    external_urls: ExternalUrls,
    href: string,
    id: string,
    images: Array<Images>,
    name: string,
    owner: Owner,
    public: boolean,
    snapshot_id: string,
    tracks: Tracks,
    type: string,
    uri: string
}

export default playlistItem;