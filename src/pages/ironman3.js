import React, { Component } from 'react';
import '../App.css';
import API from '../api/API';
import { Container, Row, Col } from "../components/grid";
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import MovieArt from '../components/movieArt/movieArt';
import Synopsys from '../components/synopsys/synopsys';
import Actors from '../components/actors/actors';
const query = "Iron Man 3";

class IronMan3 extends Component {

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
                            <p>None mentioned</p>
                            <h3>Easter Eggs</h3>
                            <ol className="bullet-indent">
                                <li><strong>Stan Lee Cameo</strong> - A beauty pageant judge who happily gives one of the contestants a 10.</li>
                                <li><strong>Dr. Yinsen</strong> - The same guy who saves Tony in Iron Man 1. Makes a direct reference to meeting Stark at a conference in Bern which is the entire opening sequence of Iron Man 3.</li>
                                <li><strong>End Credits</strong> - Marvel messing with fans making end credits 10 minutes long with bogus names.</li>
                                <li><strong>Modern Art</strong> - There's a big weird ball of twisted metal sitting in Tony's high-tech lab is actually the remnants of the Formula One race car Tony drove in Iron Man 2.</li>
                            </ol>
                        </Col>
                    </Row>
                </Container>
                <Footer title={" Thor: The Dark World"} to="/Thor:-The-Dark-World" />
            </div>
        )
    }
}

export default IronMan3;
