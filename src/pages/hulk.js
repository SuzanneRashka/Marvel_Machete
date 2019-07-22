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
            <div className="hulk-bg">
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
                            <h3>End Clips</h3>
                            <p>Tony Stark talks to General Ross about assembling a team.</p>

                        </Col>

                        <Col size="md-6">
                            <div className="hulk-box">
                                <p className="text-box">DAYS WITHOUT INCIDENT 159</p>
                            </div>
                            <div>
                                <Actors actors={this.state.result.Actors} director={this.state.result.Director} />
                            </div>
                            <div>
                                <h3 className="wrap">In A Nut Shell</h3>
                                <p>After surviving a deadly gamma radiation accident, scientist Bruce Banner travels the world in search for a cure to his inner force of rage that turns him into a massive green monster known as the Hulk. Though he is close, Banner must watch out because the malevolent General Ross and his team are searching for him and want to use his condition for military weaponry. Running out of time and options, Banner turns to his old flame Betty Ross for help. Meanwhile, a new threat rises as a power hungry soldier turns into a deadlier and more terrifying beast that can match even the Hulk's powers. ~ Blazer346, imdb.com
                                </p>
                            </div>

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