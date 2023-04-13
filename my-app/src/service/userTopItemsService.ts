import axiosInstance from "../axios/axios";

const userTopItemsService = {
    async getTopArtists() {
        const { data } = await axiosInstance.get('me/top/artists')
        return data;
    },
    async getTopTracks() {
        const { data } = await axiosInstance.get(`me/top/tracks`)
        return data;
    },
}

export default userTopItemsService;