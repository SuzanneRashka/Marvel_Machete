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
            <div className="im1">
                <Header title={query} />
                <Container>
                    <Row>
                        <Col size="md-6">
                            <div className="text p-4">
                                <div>
                                    <Synopsys plot={this.state.result.Plot} />
                                </div>
                                <div>
                                    <h3 className="wrap pt-5">In A Nut Shell</h3>
                                    <p>
                                        Genius, billionaire, playboy, philanthropist. Tony Stark showcases Stark Industries newest weapon, The Jericho, in Afghanistan. There, his convoy is attacked and Tony is taken hostage until he builds his kidnappers, The Ten Kings, a replica. But Tony doesn't build a missile, he builds a suit that is a close representation to what the comic books show. Blowing everything up on his way out, Tony escapes and after making it back home, starts building a better suit. While Tony has been away, Obadiah was put in charge of Stark Industries who had his own plans to change the corporation. Tony's not having any of that so he takes matters into his own hands.
                            </p>
                                </div>
                            </div>
                        </Col>
                        <Col size="md-6">
                            <div className="p-4">
                                <MovieArt src={this.state.result.Poster} />
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col size="md-6">
                            <div className="text p-4 gold-bg">
                                <Actors actors={this.state.result.Actors} director={this.state.result.Director} />
                                <h3>End Clips</h3>
                                <p>Nick Fury shows up in Tony's house getting past Jarvis who sounds like he's been rebooted to talk about the Avenger Initiative.</p>
                                <h3>Infinity Stone(s)</h3>
                                <p>None mentioned</p>
                            </div>
                        </Col>
                        <Col size="md-6" >
                            <div className="text p-4 gold-bg">
                                <h3>Easter Eggs</h3>
                                <ol>
                                    <li><strong>The Ten Rings</strong> - A group well known in the comics who kidnap Tony.</li>
                                    <li><strong>Cheesy Ring Tone</strong> - The ring tone on Rhode's flip phone and played throughout the film references the theme from the classic Iron Man cartoon from 1966.</li>
                                    <li><strong>SpiderMan Connection</strong> - Christine Everhart interviews Tony and works for Vanity Fair.</li>
                                    <li><strong>Jarvis</strong> - Jarvis was the name of the butler that looked after the Avengers Mansion and was intergrated into the films.</li>
                                    <li><strong>Mad Money News</strong> - This is a real show hosted by Jim Cramer on CNBC.</li>
                                    <li><strong>Cap's Shield</strong> - Captain America's shield can be seen on Tony's workbench. This could have been handed down by his father and a formal meeting hasn't yet taken place.</li>
                                    <li><strong>S.H.I.E.L.D.</strong> - Shield makes a first time appearance with Agent Coleson.</li>
                                </ol>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <div className="image iron-monger">
                            <img src="/images/iron-monger.png" alt="Iron Monger" />
                        </div>
                    </Row>
                </Container>
                <Footer title={" Iron Man 2"} to={'/Iron-Man-2'}></Footer>
            </div>
        )
    }
}

export default IronMan;