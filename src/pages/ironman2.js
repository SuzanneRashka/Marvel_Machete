import React, { Component } from 'react';
import '../App.css';
import API from '../api/API';
import { Container, Row, Col } from "../components/grid";
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import MovieArt from '../components/movieArt/movieArt';
import Synopsys from '../components/synopsys/synopsys';
import Actors from '../components/actors/actors';
const query = "Iron Man 2";

class IronMan2 extends Component {

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
                                <div className="text">
                                    <Synopsys plot={this.state.result.Plot} />
                                </div>
                                <Actors actors={this.state.result.Actors} director={this.state.result.Director} />
                            </div>
                            <h3>End Clips</h3>
                            <p>Phil Coulson is seen at a crater in the New Mexico desert, where a certain 'hammer' is found. Giving us the intro to Thor.</p>
                            <h3>Infinity Stone(s)</h3>
                            <p>Tesseract</p>
                            <h3>Easter Eggs</h3>
                            <ol className="bullet-indent">
                                <li><strong>Stan Lee Cameo</strong> - Tony mistakes Lee for Larry King.</li>
                                <li><strong>Cap's Shield</strong> - An obvious nod to Vibranium and continued Captain America support. Tony uses the shield to balance the DIY reactor.</li>
                                <li><strong>Hulk and Iron Man 2</strong> - A news story running on a background TV set implies that these two movies are running concurrently. You’ll see that it’s the same news story outlining the Hulk’s path of destruction that plays during the Hulk film.</li>
                                <li><strong>The map</strong> - Containing Avenger Initiative candidate locations; Scandanavia - Pietro and Wanda Maximoff, New Mexico - Mjolnir, New York - The Hulk, Atlantic - Cap's frozen location, and Africa - Wakanda</li>
                            </ol>

                        </Col>
                        <Col size="md-6">
                            <div>
                                <MovieArt src={this.state.result.Poster} />
                            </div>

                        </Col>

                    </Row>
                </Container>
                <Footer title={" Thor"} to="/Thor" />
            </div>
        )
    }
}

export default IronMan2;
