import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 47097ea7331e3b6387a8884b0860cebd37c8e0051e60148df4ace83dae125dcc'
    }
});