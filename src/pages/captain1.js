import React, { Component } from 'react';
import '../App.css';
import API from '../api/API';
import { Container, Row, Col } from "../components/grid";
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
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
            <div className="c1-gradient">
                <Header title={"Captain America: The First Avenger"} />
                <Container>
                    <Row>
                        <Col size="md-6">
                            <div>
                                <MovieArt src={this.state.result.Poster} />
                            </div>
                        </Col>
                        <Col size="md-6">
                            <div className="image tesseract">
                                <img src="/images/tesseract.png" alt="" />
                            </div>
                            <div className="text pt-5">
                                <Synopsys plot={this.state.result.Plot} />
                                <h3>In A Nut Shell</h3>
                                <p>
                                    Movie opens finding Captain America buried in ice, which by the end of the movie, explains how he got there. Steve Rogers enters the military and is selected for special program to enhance soldiers. The doctor who turned him into his bigger self, Dr. Erskine, dies to which Rogers gives chase and finds out about HYDRA. After he is sent overseas as propaganda, he learns of Buckys captured unit and goes in after him. Rogers saves the unit but Red Skull gets away. Figures, right? Back home, everyone comes together and devises a new plan. The new team sets out in the frigid mountains where Bucky doesn't make it. With newly filled revenge, Cap goes after Red Skull in a runway/tunnel that would make the Fast and Furious crew jealous. In the final scenes, Red Scull is holding the tesseract which destroys him as we find out later and Rogers has no choice but to bury the payload and himself in the ice.
                                </p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col size="md-6" >
                            <div className="text">
                                <h3>Easter Eggs</h3>
                                <ol>
                                    <li><strong>Tree of Life</strong> - An etching refrencing Yggdrasil that appears in CA:TFA as well as Thor that is the basis of all Norse legends. Shown in Thor opening credits as cosmic interweb of cosmic stuff.</li>
                                    <li><strong>Raiders of the Lost Ark reference</strong> - Director Joe Johnston worked on the set of said movie as a special effects supervisor. Hence the line, "... and the Fuhrer digs for trinkets in the desert" when holding the tesseract.</li>
                                    <li><strong>Human Torch</strong> - Taken from the original Marvel Comics and on display at the Stark Expo</li>
                                    <li><strong>Comic Cover</strong> - Steve Rogers is shown knocking out Hitler on the cover of the 1st edition of Captain America. It was stated in the movie by Chris Evans that he has the experience of knocking out Hilter over 200 times durning his USO stage show.</li>
                                    <li><strong>Tønsberg, Norway</strong> - same village where Thor opened.</li>
                                    <li>Odin refernces 'The Jewel of Odin's treasure room' meaning the tesseract which is shown in Thor: Ragnarok.</li>
                                    <li>Tommy Lee Jones and Men In Black button.</li>
                                    <li>When the syrum is shot into Steve Rodgers, his eye burst open, like that of The Incredible Hulk.</li>
                                </ol>
                            </div>
                        </Col>
                        <Col size="md-6">
                            <Actors actors={this.state.result.Actors} director={this.state.result.Director} />
                            <h3 className="text">End Clips</h3>
                            <ul className="text">
                                <li>Rogers boxing talking with Nick Fury about the changed world. </li>
                                <li>Avengers trailer</li>
                            </ul>
                        </Col>
                    </Row>
                    <Row>
                        <div className="image redskull">
                            <img src="/images/RedSkull.png" alt="RedSkull" />
                        </div>
                    </Row>
                </Container>
                <Footer title={" Iron Man"} to={"/Iron-Man"}></Footer>
            </div>
        )
    }
}

export default Captain1;