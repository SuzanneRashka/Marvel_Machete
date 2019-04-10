import React, { Component } from 'react';
import '../App.css';
import API from '../api/API';
import { Container, Row, Col } from "../components/grid";
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import MovieArt from '../components/movieArt/movieArt';
import Synopsys from '../components/synopsys/synopsys';
import Actors from '../components/actors/actors';
const query = "The Incredible Hulk";

// import HulkClick from '../components/hulkClick/hulkClick';

class Hulk extends Component {

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
                            <div className="text p-4">
                                <Synopsys plot={this.state.result.Plot} />
                            </div>
                            <div>
                                <Actors actors={this.state.result.Actors} director={this.state.result.Director} />
                            </div>
                            <h3>End Clips</h3>
                            <p>Tony Stark talks to General Ross about assembling a team</p>
                            <h3>Infinity Stone(s)</h3>
                            <p>None mentioned</p>
                        </Col>

                    </Row>
                </Container>
                <Footer title={" Iron Man 2"} to="/Iron-Man-2" />
            </div>
        )
    }

}

export default Hulk;

// <div className="">
// <MovieArt src={this.state.result.Poster} />
// </div>