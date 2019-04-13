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
                            <div className="text">
                                <Synopsys plot={this.state.result.Plot} />
                            </div>

                        </Col>

                        <Col size="md-6">
                            <div>
                                <Actors actors={this.state.result.Actors} director={this.state.result.Director} />
                            </div>
                            <h3>End Clips</h3>
                            <p>Tony Stark talks to General Ross about assembling a team.</p>
                            <h3>Infinity Stone(s)</h3>
                            <p>None mentioned</p>
                            <h3>Easter Eggs</h3>
                            <ol className="bullet-indent">
                                <li><strong>Stan Lee Cameo</strong> - A man that drinks the tainted soda bottle.</li>
                                <li><strong>Nick Fury</strong> - The credits are filled with Easter eggs  including a brief reference to Samuel L. Jackson's Nick Fury.</li>
                                <li><strong>Stanley's Hotel</strong> - Stanley's. Stan Lee's. Stan Lee.</li>
                                <li><strong>Lou Ferrigno</strong> - Lou Ferrigno previously portrayed The Hulk in the 1970s.</li>
                                <li><strong>Dr. Reinstein</strong> - The container that includes the chemicals for the Super Soldier Serum includes the name of Dr. Reinstein, the alias of Abraham Erskine from Captain America: The First Avenger.</li>
                                <li><strong>'David'</strong> - The package to Bruce from Betty is addresed to David B., a reference to The Hulk's name change in the TV series where he was called David instead of Bruce.</li>
                            </ol>
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