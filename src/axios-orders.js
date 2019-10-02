import axios from 'axios';


const instance = axios.create({
    baseURL: 'https://react-my-burger-c3d49.firebaseio.com/'
});

export default instance;