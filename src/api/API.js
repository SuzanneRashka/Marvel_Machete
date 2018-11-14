import axios from "axios";
const BASEURL = "https://www.omdbapi.com/?t=";
const APIKEY = "&y=&plot=short&apikey=";
export const KEY = process.env.REACT_APP_SECRET_KEY;

require('dotenv').config();

export default {
    search: function (query) {
        return axios.get(BASEURL + query + APIKEY + KEY);
    }
};
