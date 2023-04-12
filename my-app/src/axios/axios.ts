import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://api.spotify.com/v1/"
})

axiosInstance.interceptors.request.use((config) => {
        config.headers.Authorization = `Bearer ${localStorage.getItem('authToken')}`
        return config;
    }
)

axiosInstance.interceptors.response.use((response) => {
    return response
  }, (error) => {
    if(error.response.status === 401) {
      //@ts-ignore
      window.location = '/Login';
    }
})

export default axiosInstance;