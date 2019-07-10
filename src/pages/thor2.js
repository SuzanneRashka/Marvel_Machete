import React, { Component } from 'react';
import '../App.css';
import API from '../api/API';
import { Container, Row, Col } from "../components/grid";
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import MovieArt from '../components/movieArt/movieArt';
import Synopsys from '../components/synopsys/synopsys';
import Actors from '../components/actors/actors';
const query = "Thor: The Dark World";

class Thor2 extends Component {

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
                            <p>text</p>
                            <h3>Infinity Stone(s)</h3>
                            <p>Reality Stone</p>
                            <h3>Easter Eggs</h3>
                            <ol className="bullet-indent">
                                <li><strong>Stan Lee Cameo</strong> - A man that drinks the tainted soda bottle.</li>
                                <li><strong>one</strong> - text.</li>
                                <li><strong>two</strong> - text.</li>
                                <li><strong>three</strong> - text.</li>
                                <li><strong>four</strong> - text.</li>
                                <li><strong>five</strong> - text.</li>
                            </ol>
                        </Col>
                        <Col size="md-6">
                            <div>
                                <MovieArt src={this.state.result.Poster} />
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Footer title={" Captain America: The Winter Soldier"} to="/Captain-America:-The-Winter-Soldier" />
            </div>
        )
    }
}

export default Thor2;
