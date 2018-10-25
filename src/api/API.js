import axios from "axios";
const BASEURL = "http://www.omdbapi.com/?t=";
const APIKEY = "&y=&plot=full&apikey=";

export default {
    search: function (query) {
        return axios.get(BASEURL + query + APIKEY);
    }
};

// "http://www.omdbapi.com/?t=it&y=&plot=short&apikey="