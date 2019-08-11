import axios from 'axios';


export class youtube {
    axiosClient = axios.create({
        baseURL: 'https://www.googleapis.com/youtube/v3',
    });
}