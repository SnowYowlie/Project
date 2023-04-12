import axiosInstance from "../axios/axios";
import playlist from "../types/playlist";
import { AxiosResponse } from "axios";

const playlistService = {
    async getList() {
        const { data } = await axiosInstance.get('me/playlists?offset=0&limit=50')
        return data;
    },
    async getById(id: string): Promise<playlist> {
        const { data }: AxiosResponse<playlist> = await axiosInstance.get(`playlists/${id}`)
        return data;
    },
    // async getPlaylistItems() {

    // }
} 

export default playlistService;