import axios from "axios";
export const KEY = process.env.SECRET_KEY;
const BASEURL = "http://www.omdbapi.com/?t=";
const APIKEY = "&y=&plot=short&apikey=" + KEY;

require('dotenv/config');

console.log(KEY + " KEY");

export default {
    search: function (query) {
        return axios.get(BASEURL + query + APIKEY + KEY);
    }
};