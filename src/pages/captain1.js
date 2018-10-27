import React, { Component } from 'react';
import '../App.css';
import API from '../api/API';
import { Container, Row, Col } from "../components/grid";
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import MovieArt from '../components/movieArt/movieArt';
import Synopsys from '../components/synopsys/synopsys';
import Actors from '../components/actors/actors';

const query = "Captain America: The First Avenger";

class Captain1 extends Component {

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
            <div className="c1-gradient">
                <Header title={"Captain America: The First Avenger"} />
                <Container>
                    <Row>
                        <Col size="md-6">
                            <div>
                                <MovieArt src={this.state.result.Poster} />
                            </div>
                        </Col>
                        <Col size="md-6">
                            <div>
                                <Synopsys plot={this.state.result.Plot} />
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col size="md-6">
                            <div>
                                <h3>Easter Eggs</h3>
                                <ol>
                                    <li><strong>Tree of Life</strong> - An etching refrencing Yggdrasil that appears in CA:TFA as well as Thor that is the basis of all Norse legends. Shown in Thor opening credits as cosmic interweb of cosmic stuff.</li>
                                    <li>Raiders of the Lost Ark reference - Director Joe Johnston worked on the set of said movie as a special effects supervisor. Hence the line, "... and the Fuhrer digs for trinkets in the desert" when holding the tesseract.</li>
                                    <li>Human Torch - Taken from the original Marvel Comics and on display at the Stark Expo</li>
                                    <li>Comic Cover - Steve Rogers is shown knocking out Hitler on the cover of the 1st edition of Captain America. It was stated in the movie by Chris Evans that he has the experience of knocking out Hilter over 200 times durning his USO stage show.</li>
                                    <li>Tønsberg, Norway - same village where Thor opened.</li>
                                    <li>Odin refernces 'The Jewel of Odin's treasure room' meaning the tesseract</li>
                                    <li>Tommy Lee Jones and Men In Black button.</li>
                                    <li>When the syrum is shot into Steve Rodgers, his eye burst open, like that of The Incredible Hulk.</li>
                                </ol>
                            </div>
                        </Col>
                        <Col size="md-6">
                            <Actors actors={this.state.result.Actors} director={this.state.result.Director} />
                        </Col>
                    </Row>
                </Container>
                <Footer title={" Iron Man"} />
            </div>
        )
    }
}

export default Captain1;

// <MovieArt
// title={this.state.result.Title}
// src={this.state.result.Poster}
// director={this.state.result.Director}
// genre={this.state.result.Genre}
// released={this.state.result.Released}
// />