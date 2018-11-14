import React, { Component } from 'react';
import '../App.css';
import API from '../api/API';
// import { Container, Row, Col } from "../components/grid";
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
// import MovieArt from '../components/movieArt/movieArt';
// import Synopsys from '../components/synopsys/synopsys';
// import Actors from '../components/actors/actors';
const query = "The Incredible Hulk";

class Hulk extends Component {
    render() {
        return (
            <div>
                <Header title={query} />

                <Footer title={" Iron Man 2"} to={"/Iron-Man-2"}></Footer>
            </div>
        )
    }
}

export default Hulk;