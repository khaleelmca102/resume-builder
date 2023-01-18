<<<<<<< HEAD
import axios from 'axios';
=======
import axios from "axios";
>>>>>>> 46b357e0d76c8a7e7a88f2912e613f4298446bc5

const axiosClient = axios.create({
    baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`
})

axiosClient.interceptors.request.use((config) => {
<<<<<<< HEAD
    const token = localStorage.getItem('access_token');
    config.headers.Authorization = `Bearer ${token}`;
    return config;
})

=======
    const token = localStorage.getItem('access_token')
    config.headers.Authorization = `Bearer ${token}`
    return config;
})

axiosClient.interceptors.response.use((response) => {
    return response;
}, (error) => {
    const {response} = error;
    if(response.status === 401){
        localStorage.removeItem('access_token');
    }

    throw error;
})

>>>>>>> 46b357e0d76c8a7e7a88f2912e613f4298446bc5
export default axiosClient;