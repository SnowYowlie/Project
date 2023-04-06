import Button from "../../components/base/Button";
import "./LoginPage.scss"; 
import { generateSpotifyURL } from "../../helpers";

const LoginPage = () => {
    const connectToApp = () => {
        window.location.href = generateSpotifyURL()
    }
    return (
        <section className="login__wrapper">
            <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png" alt="Logo" />
            <Button clickAction={connectToApp}>
                Connect
            </Button>
        </section>
    )
}

export default LoginPage;