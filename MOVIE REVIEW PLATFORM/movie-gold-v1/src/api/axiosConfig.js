import axios from 'axios';

export default axios.create({
    baseURL: 'http://localhost:8080', // Backend running locally
    headers: {
        "Content-Type": "application/json",
    },
});
