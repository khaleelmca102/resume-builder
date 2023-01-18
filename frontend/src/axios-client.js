import axios from 'axios';

const axiosClient = axios.create({
    baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`
})

axiosClient.interceptors.request.use((config) => {
    const token = localStorage.getItem('access_token');
    config.headers.Authorization = `Bearer ${token}`;
    return config;
})

export default axiosClient;