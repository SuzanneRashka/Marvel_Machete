import React, { Component } from 'react';
import '../App.css';
import API from '../api/API';
import { Container, Row, Col } from "../components/grid";
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import MovieArt from '../components/movieArt/movieArt';
import Synopsys from '../components/synopsys/synopsys';
import Actors from '../components/actors/actors';
const query = "The Avengers";

class Avengers1 extends Component {

    state = {
        result: {},
        search: ""
    };

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
                <Header title={query} />
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
                                <Actors actors={this.state.result.Actors} director={this.state.result.Director} />
                            </div>
                            <h3>End Clips</h3>
                            <p>text</p>
                            <h3>Infinity Stone(s)</h3>
                            <p>Tesseract</p>
                            <h3>Easter Eggs</h3>
                            <ol className="bullet-indent">
                                <li><strong>Stan Lee Cameo</strong> - Chess player in a park in Manhattan.</li>
                                <li><strong>Project 42</strong> - Coulson leaves behind files for Tony relating to the destruction of Project Pegasus (Captain Marvel).</li>
                                <li><strong>Huginn and Munnin</strong> - A pair of ravens that fly around acting as Odin's mhystical spies in the sky. They can be seen flying around the mountain peak where Thor and Loki have a heart-to-heart. </li>
                                <li><strong>Hulk's Suicide Attempt</strong> - When Banner says that he tired to kill himself, but the other guy spit the bullet out is reference to footage shot in Norton's 2008 Hulk but was cut.</li>
                                <li><strong>Lou Ferrigno's Secret Cameo</strong> - The scream for the Hulk was actually Lou howling from the 70's series.</li>
                            </ol>
                        </Col>

                    </Row>
                </Container>
                <Footer title={" Iron Man 3"} to="/Iron-Man-3" />
            </div>
        )
    }
}

export default Avengers1;