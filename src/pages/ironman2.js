import React, { Component } from 'react';
import '../App.css';
import API from '../api/API';
// import { Container, Row, Col } from "../components/grid";
// import Header from '../components/header/header';
// import Footer from '../components/footer/footer';
// import MovieArt from '../components/movieArt/movieArt';
// import Synopsys from '../components/synopsys/synopsys';
// import Actors from '../components/actors/actors';
const query = "Iron Man 2";

class IronMan2 extends Component {

    state = {
        result: {},
        search: ""
    };

    // const query = "Captain America: The First Avenger";

    searchMovies = query => {
        API.search(query)
            .then(res => this.setState({ result: res.data }))
            .catch(err => console.log(err));
    };

    componentDidMount() {
        this.searchMovies(query);
    }

    render() {
        return (
            <div>
                Hello
            </div>

        )
    }
}

export default IronMan2;