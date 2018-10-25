import React from "react";
import './styles.css';

const MovieArt = props => (

    <div className="movieArt buffer">
        <img
            alt={props.title}
            src={props.src}
        />
    </div>
)

export default MovieArt;

// <h3>Director(s): {props.director}</h3>
//         <h3>Genre: {props.genre}</h3>
//         <h3>Released: {props.released}</h3>