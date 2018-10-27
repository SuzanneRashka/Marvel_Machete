import React from "react";
import './styles.css';

const Actors = props => (

    <div>
        <h3>Actors</h3>
        <p>{props.actors}</p>
        <h3>Director</h3>
        <p>{props.director}</p>
        <h3>End Clips</h3>
        <p>Rogers boxing talking with Nick Fury about the changed world. </p>
        <p>Avengers trailer</p>
    </div>
)

export default Actors;
