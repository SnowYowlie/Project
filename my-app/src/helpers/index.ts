export const generateSpotifyURL = () => {
    const clientID = '21bfb8d7a2974d60b7156e66adfcff33';
    const redirectURI = window.location.origin;
    const spotifyURL = "https://accounts.spotify.com/authorize";
    const scopes = [
        'user-read-email', 'user-read-private', 'user-library-modify' , 'user-library-read', 'user-read-playback-position', 'user-top-read', 'user-read-recently-played', 'user-follow-modify', 'user-follow-read',
        'playlist-read-private', 'playlist-read-collaborative', 'playlist-modify-private', 'playlist-modify-public', 'app-remote-control', 'streaming', 'user-read-playback-state', 'user-modify-playback-state', 'user-read-currently-playing', 'ugc-image-upload'
    ];
    return `${spotifyURL}?client_id=${clientID}&redirect_uri=${redirectURI}&scope=${scopes.join(" ")}&response_type=token&show_dialog=true`;
}