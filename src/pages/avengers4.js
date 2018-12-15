import React, { Component } from 'react';
import '../App.css';
import API from '../api/API';
import { Container, Row, Col } from "../components/grid";
import Header from '../components/header/header';
import MovieArt from '../components/movieArt/movieArt';
import { Link } from "react-router-dom";
// import Synopsys from '../components/synopsys/synopsys';
// import Actors from '../components/actors/actors';
const query = "Avengers: EndGame";
// <Link to={this.props.to}>
// <span className="title hightlight">
//     22 movies and 10+ years! Thank you Stan Lee and all the creators that touched our lives leading us through this incredible journey.
// </span>
// </Link>
class Avengers4 extends Component {

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

                <div className="navbar highlight">
                    <Link to="/">
                        <span className="title hightlight">
                            22 movies and 10+ years in the making! Thank you Stan Lee and all the other contributors that made this universe possible.
                        </span>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Avengers4;
