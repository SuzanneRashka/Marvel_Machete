import React, { Component } from 'react';
import '../App.css';
import API from '../api/API';
// import { Container, Row, Col } from "../components/grid";
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
// import MovieArt from '../components/movieArt/movieArt';
// import Synopsys from '../components/synopsys/synopsys';
// import Actors from '../components/actors/actors';
const query = "Movie Title";

class Hero extends Component {
    render() {
        return (
            <div>
                <Header title={query} />

                <Footer title={" Next"} to={"/Next"}></Footer>
            </div>
        )
    }
}

export default Hero;