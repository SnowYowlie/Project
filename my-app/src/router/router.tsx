import MainPage, {mainPageLoader} from "../pages/MainPage/MainPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import { createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import MainTab, { mainTabLoader } from "../components/MainTab/MainTab";
import PlaylistPage, { playListLoader } from "../pages/PlaylistPage/PlaylistPage";

export const router = createBrowserRouter(createRoutesFromElements(
    <>
    <Route path="/" loader={mainPageLoader} element={<MainPage/>}>
      <Route index loader={mainTabLoader} element={<MainTab />} />
      <Route path="playlist/:id" loader={playListLoader} element={<PlaylistPage />} />
    </Route>
    <Route path="/Login" element={<LoginPage/>} />
  </>
))