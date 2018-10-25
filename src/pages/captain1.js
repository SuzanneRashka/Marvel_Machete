import React, { Component } from 'react';
import '../App.css';
import API from '../api/API';
import { Container, Row, Col } from "../components/grid";
import Header from '../components/header/header';
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
            <div>
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
                                <h3>Highlights and Easter Eggs:</h3>
                                <ol>
                                    <li>Vibranium from Wakandi</li>
                                    <li>Stark family</li>
                                    <li>Asgard</li>
                                    <li>Arnim Zola's intro</li>
                                    <li>Tree of life</li>
                                    <li>Raiders of the Lost Ark reference</li>
                                    <li>Human Torch</li>
                                </ol>
                            </div>
                        </Col>
                        <Col size="md-6">
                            <Actors actors={this.state.result.Actors} />
                        </Col>
                    </Row>
                </Container>
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