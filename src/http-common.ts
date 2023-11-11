import axios, { type AxiosInstance } from "axios"

const APIURL = import.meta.env.VITE_APIURL//process.env.VUE_APP_APIURL

const apiClient: AxiosInstance = axios.create({
    baseURL: APIURL, //"http://localhost:4500/api",
    headers: {
        "Content-type": "application/json",
    },
})
export default apiClient