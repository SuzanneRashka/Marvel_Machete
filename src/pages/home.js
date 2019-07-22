import React from 'react';
import { Link } from "react-router-dom";
import { Container, Row, Col } from "../components/grid";
import Bside from '../components/bside/bside';
import logos from '../api/logos';
import '../App.css';

class Home extends React.Component {
    render() {
        return (
            <div>
                <Bside logos={logos} />
                <div className="content stars">
                    <div>
                        <h1>Marvel Watch List</h1>
                        <p>This is a movies only list, no tv shows included. Click on the movie to be taken to the the individual page for more information. The logo side contains all the movies listed in an alphabet list. I made this site to practice React and to work on different CSS elements.</p>
                    </div>
                    <Container>
                        <Row>
                            <Col size="md-6">
                                <h1>List by Phase</h1>
                                <h2>Phase 1</h2>
                                <ul className="no-bullet">
                                    <li><Link to="/Iron-Man">Iron Man</Link></li>
                                    <li><Link to="/The-Incredible-Hulk">The Incredible Hulk</Link></li>
                                    <li>Iron Man 2</li>
                                    <li>Thor</li>
                                    <li><Link to="/Captain-America:-The-First-Avenger">Captain America: The First Avenger</Link></li>
                                    <li>The Avengers</li>
                                </ul>

                                <h2>Phase 2</h2>
                                <ul className="no-bullet">
                                    <li>Iron Man 3</li>
                                    <li>Thor: The Dark World</li>
                                    <li>Captain America: The Winter Soldier</li>
                                    <li>Guardians of the Galaxy</li>
                                    <li>Avengers: Age of Ultron</li>
                                    <li>Ant-Man</li>
                                </ul>

                                <h2>Phase 3</h2>
                                <ul className="no-bullet">
                                    <li>Captain America: Civil War</li>
                                    <li>Doctor Strange</li>
                                    <li>Guardians of the Galaxy: Vol 2</li>
                                    <li>Spider-Man: Homecoming</li>
                                    <li>Thor: Ragnarok</li>
                                    <li>Black Panther</li>
                                    <li>Avengers: Infinity War</li>
                                    <li>Ant-Man and the Wasp</li>
                                    <li>Captain Marvel</li>
                                    <li>Avengers: EndGame</li>
                                    <li>Spider-Man: Far from Home</li>
                                </ul>
                                <h3>Phase 4 (estimated)</h3>
                                <ul className="no-bullet">
                                    <li>Black Widow (in production)</li>
                                    <li>Dr. Strange 2</li>
                                    <li>(As)Guardians of the Galaxy: Vol 3 TBD, 2020</li>
                                    <li>Black Panther 2)</li>
                                </ul>

                            </Col>

                            <Col size="md-6">
                                <h1>Chronologically</h1>
                                <ul className="no-bullet">
                                    <li>Captain America: The First Avenger</li>
                                    <li>Captain Marvel</li>
                                    <li>Iron Man</li>
                                    <li>Iron Man 2</li>
                                    <li>The Incredible Hulk</li>
                                    <li>Thor</li>
                                    <li>The Avengers</li>
                                    <li>Thor: The Dark World</li>
                                    <li>Guardians of the Galaxy</li>
                                    <li>Guardians of the Galaxy: Vol 2</li>
                                    <li>Iron Man 3</li>
                                    <li>Captain America: The Winter Soldier</li>
                                    <li>Avengers: Age of Ultron</li>
                                    <li>Ant-Man</li>
                                    <li>Captain America: Civil War</li>
                                    <li>Black Panther</li>
                                    <li>Spider-Man: Homecoming</li>
                                    <li>Doctor Strange</li>
                                    <li>Thor: Ragnarok</li>
                                    <li>Avengers: Infinity War</li>
                                    <li>Ant-Man and the Wasp</li>
                                    <li>Avengers: Endgame</li>
                                    <li>Spider-Man: Far From Home</li>
                                </ul>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        )
    }
}

export default Home;

        // https://overmental.com/content/the-definitive-chronological-viewing-order-for-the-marvel-cinematic-universe-16866

// https://codepen.io/saransh/pen/BKJun