type Images = {
  url: string,
  height: number,
  width: number
}

export type Items = {
  added_at: string,
  added_by: {
    external_urls: {
      spotify: string
    },
    followers: {
      href: string,
      total: number
    },
    href: string,
    id: string,
    type: string,
    uri: string
  },
  is_local: boolean,
  track: {
    album: {
      album_type: string,
      total_tracks: number,
      available_markets: Array<string>[],
      external_urls: {
        spotify: string
      },
      href: string,
      id: string,
      images: Array<Images>,
      name: string,
      release_date: string,
      release_date_precision: string,
      restrictions: {
        reason: string
      },
      type: string,
      uri: string,
      copyrights: [
        {
          text: string,
          type: string
        }
      ],
      external_ids: {
        isrc: string,
        ean: string,
        upc: string
      },
      genres: Array<string>[],
      label: string,
      popularity: number,
      album_group: number,
      artists: [
        {
          external_urls: {
            spotify: string
          },
          href: string,
          id: string,
          name: string,
          type: string,
          uri: string
        }
      ]
    },
    artists: [
      {
        external_urls: {
          spotify: string
        },
        followers: {
          href: string,
          total: number
        },
        genres: Array<string>[],
        href: string,
        id: string,
        images: Array<Images>,
        name: string,
        popularity: number,
        type: string,
        uri: string
      }
    ],
    available_markets: Array<string>,
    disc_number: number,
    duration_ms: number,
    explicit: boolean,
    external_ids: {
      isrc: string,
      ean: string,
      upc: string
    },
    external_urls: {
      spotify: string
    },
    href: string,
    id: string,
    is_playable: false,
    linked_from?: {
    },
    restrictions: {
      reason: string
    },
    name: string,
    popularity: number,
    preview_url: string,
    track_number: number,
    type: string,
    uri: string,
    is_local: boolean
  }
}

type playlist = {
    collaborative: boolean,
    description: string,
    external_urls: {
      spotify: string
    },
    followers: {
      href: string,
      total: number
    },
    href: string,
    id: string,
    images: Images[],
    name: string,
    owner: {
      external_urls: {
        spotify: string
      },
      followers: {
        href: string,
        total: number
      },
      href: string,
      id: string,
      type: string,
      uri: string,
      display_name: string
    },
    public: boolean,
    snapshot_id: string,
    tracks: {
      href: string,
      limit: number,
      next: string,
      offset: number,
      previous: string,
      total: number,
      items: Items[]
    },
    type: string,
    uri: string
}

export default playlist;