import React, { Component } from 'react';
import '../App.css';
import API from '../api/API';
import { Container, Row, Col } from "../components/grid";
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import MovieArt from '../components/movieArt/movieArt';
import Synopsys from '../components/synopsys/synopsys';
import Actors from '../components/actors/actors';
const query = "Iron Man";

class IronMan extends Component {

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
            <div className="im1-gradient">
                <Header title={"Iron Man"} />
                <Container>
                    <Row>
                        <Col size="md-6">
                            <div className="text pt-5">
                                <Synopsys plot={this.state.result.Plot} />
                                <h3>In A Nut Shell</h3>
                                <p>
                                A genius, billionaire, playboy philanthropist, Tony Stark
                                </p>
                            </div>
                        </Col>

                        <Col size="md-6">
                            <div>
                                <MovieArt src={this.state.result.Poster} />
                            </div>
                        </Col>

                    </Row>
                    <Row>

                        <Col size="md-6">
                            <div className="text">
                                <h3>Easter Eggs</h3>
                                <ol>
                                    <li><strong>The Ten Rings</strong> - A group well known in the comics who kidnap Tony.</li>
                                    <li><strong>Cheesy Ring Tone</strong> - The ring tone on Rhode's flip phone and played throughout the film references the theme from the classic Iron Man cartoon from 1966.</li>
                                    <li><strong>SpiderMan Connection</strong> - Christine Everhart interviews Tony and works for The Daily Bugle.</li>
                                    <li><strong>Jarvis</strong> - Jarvis was the name of the butler that looked after the Avengers Mansion and was intergrated into the films.</li>
                                    <li><strong>Mad Money News</strong> - This is a real show hosted by Jim Cramer on CNBC.</li>
                                    <li><strong>Cap's Shield</strong> - Captain America's shield can be seen on Tony's workbench. This could have been handed down by his father and a formal meeting hasn't yet taken place.</li>
                                    <li><strong>S.H.I.E.L.D.</strong> - Shield makes a first time appearance with Agent Coleson.</li>
                                </ol>
                            </div>
                        </Col>
                        <Col size="md-6">
                            <div className="text">
                                <Actors actors={this.state.result.Actors} director={this.state.result.Director} />
                                <h3>End Clips</h3>
                                <ul >
                                    <li>one</li>
                                    <li>two</li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <div>
                            {/*<img src="/images/tesseract.png" alt="" /> */}
                        </div>
                    </Row>
                </Container>
                <Footer title={" Iron Man 2"} to="/Iron-Man-2" />
            </div>
        )
    }
}

export default IronMan;