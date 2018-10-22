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
                <div className="container content">
                    <div>
                        <h1>Marvel Machete</h1>
                        <p>This is a movies only list. Click on the movie to be taken to the movies individual page for more information. </p>
                    </div>
                    <h2>Phase 1</h2>
                    <ul>
                        <li><Link to="/Captain-America:-The-First-Avenger">Captain America: The First Avenger</Link></li>
                        <li><Link to="/Iron-Man">Iron Man</Link></li>
                        <li>Iron Man 2</li>
                        <li>The Incredible Hulk</li>
                        <p>- if tony stark is mentioned as a cunsultant for sheild, that happened in im2 and tih would have to follow</p>
                        <li>Thor</li>
                        <li>The Avengers</li>
                    </ul>

                    <h2>Phase 2</h2>
                    <ul>
                        <li>Iron Man 3</li>
                        <li>Thor: The Dark World</li>
                        <li>Captain America: The Winter Soldier</li>
                        <li>Guardians of the Galaxy</li>
                        <li>Guardians of the Galaxy: Vol 2</li>
                        <li>Avengers: Age of Ultron</li>
                        <li>Ant-Man</li>
                    </ul>

                    <h2>Phase 3</h2>
                    <ul>
                        <li>Captain America: Civil War</li>
                        <li>Black Panther</li>
                        <li>Doctor Strange</li>
                        <li>Spider-Man: Homecoming</li>
                        <li>Ant-Man and the Wasp</li>
                        <li>Thor: Ragnarok</li>
                        <li>Avengers: Infinity War</li>
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