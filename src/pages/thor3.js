import React, { Component } from 'react';
import '../App.css';
import API from '../api/API';
import { Container, Row, Col } from "../components/grid";
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import MovieArt from '../components/movieArt/movieArt';
// import Synopsys from '../components/synopsys/synopsys';
// import Actors from '../components/actors/actors';
const query = "Thor: Ragnarok";

class Thor3 extends Component {

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
                    </Row>
                </Container>
                <Footer title={" Black Panther"} to="/Black-Panther" />
            </div>
        )
    }
}

export default Thor3;
