import axios from 'axios'; // https://www.npmjs.com/package/axios

// We will be using the Youtube Data API - https://developers.google.com/youtube/v3/getting-started
// key=API_KEY = 
export default axios.create({
    baseURL: 'https:/www.googleapis.com/youtube/v3',
    params: ""
});