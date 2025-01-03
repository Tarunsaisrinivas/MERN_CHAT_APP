import axios from 'axios'

export const axiosInstance = axios.create({
    baseURL: 'http://localhost:1914/api',
    withCredentials: true
})