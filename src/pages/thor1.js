import React, { Component } from 'react';
import '../App.css';
import API from '../api/API';
import { Container, Row, Col } from "../components/grid";
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import MovieArt from '../components/movieArt/movieArt';
import Synopsys from '../components/synopsys/synopsys';
import Actors from '../components/actors/actors';
const query = "Thor";

class Thor extends Component {

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
                                <Synopsys plot={this.state.result.Plot} />
                                <Actors actors={this.state.result.Actors} director={this.state.result.Director} />
                            </div>
                            <h3>End Clips</h3>
                            <p>Foreshadowing The Avengers, Nick Fury welcomes Erik Selvig to a S.H.I.E.L.D. facility and, after showing him the Tesseract, asks him to investigate the object further. Selvig agrees, unaware that his mind is being controlled by Loki.</p>
                            <h3>Infinity Stone(s)</h3>
                            <p>The Tesseract</p>
                            <h3>Easter Eggs</h3>
                            <ol className="bullet-indent">
                                <li><strong>Stan Lee Cameo</strong> - Lee unsuccessfully tries to drag Thor's hammer with his pickup truck.</li>
                                <li><strong>The Village</strong> - The Norweigan village that is seen in the opening of Thor is the same place seen in the opening for Captain America: The First Avenger..</li>
                                <li><strong>Thor's Helmet</strong> - This scene is pivotal in the Marvel Cinematic Universe, because it's one of the only times that Thor wears his trademark winged helmet.</li>
                                <li><strong>Puente Antiguo</strong> - The city that much of Thor takes place in is Puente Antiguo, New Mexico, which translates to "old bridge." a reference to the Bifrost..</li>
                                <li><strong>Hawkeye</strong> - Jeremy Renner makes his debut as the archer-Avenger in the film, and his presence is first teased with this shot..</li>
                                <li><strong>Tree of Life</strong> - Thor draws Jane a photo of the nine realms, and The World Tree, Yggdrasil, which is also reference in Captain America: The First Avenger.</li>
                            </ol>
                        </Col>
                        <Col size="md-6">
                            <div>
                                <MovieArt src={this.state.result.Poster} />
                            </div>
                        </Col>

                    </Row>
                </Container>
                <Footer title={" Captain America: The First Avenger"} to="/Captain-America:-The-First-Avenger" />
            </div>
        )
    }
}

export default Thor;
