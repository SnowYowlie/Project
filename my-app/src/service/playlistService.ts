import axiosInstance from "../axios/axios";

const playlistService = {
    async getList() {
        const { data } = await axiosInstance.get('me/playlists')
        return data;
    },
    async getById(id: number) {
        const { data } = await axiosInstance.get(`playlists/${id}`)
        return data;
    }
} 

export default playlistService;