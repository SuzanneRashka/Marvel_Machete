import React from 'react';
import { Link } from "react-router-dom";
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
                        <h1>Marvel Machete</h1>
                        <p>This is a movies only list. Click on the movie to be taken to the movies individual page for more information. The right side contains all the movies listed in an alphabet list. I made this site to practice React and to work on different CSS elements and to have each movie be visually better than the last. (Hopefully!) </p>
                    </div>
                    <h2>Phase 1</h2>
                    <ul>
                        <li><Link to="/Iron-Man">Iron Man</Link></li>
                        <li>The Incredible Hulk</li>
                        <li><Link to="/Iron-Man-2">Iron Man 2</Link></li>
                        <li>Thor</li>
                        <li><Link to="/Captain-America:-The-First-Avenger">Captain America: The First Avenger</Link></li>
                        <li>The Avengers</li>
                    </ul>

                    <h2>Phase 2</h2>
                    <ul>
                        <li>Iron Man 3</li>
                        <li>Thor: The Dark World</li>
                        <li>Captain America: The Winter Soldier</li>
                        <li>Guardians of the Galaxy</li>
                        <li>Avengers: Age of Ultron</li>
                        <li>Ant-Man</li>
                    </ul>

                    <h2>Phase 3</h2>
                    <ul>
                        <li>Captain America: Civil War</li>
                        <li>Doctor Strange</li>
                        <li>Guardians of the Galaxy: Vol 2</li>
                        <li>Spider-Man: Homecoming</li>
                        <li>Thor: Ragnarok</li>
                        <li>Black Panther</li>
                        <li>Avengers: Infinity War</li>
                        <li>Ant-Man and the Wasp</li>
                        <li>Captain Marvel</li>
                        <li>Avengers: Untitled</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Home;

// https://overmental.com/content/the-definitive-chronological-viewing-order-for-the-marvel-cinematic-universe-16866